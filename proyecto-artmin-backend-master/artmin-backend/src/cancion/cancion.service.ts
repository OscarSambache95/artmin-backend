import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like, getRepository} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {CancionEntity} from './cancion.entity';
import {AlbumEntity} from '../album/album.entity';
import {GeneroArtistaAlbumCancionEntity} from '../genero-artista-album-cancion/genero-artista-album-cancion.entity';
import {AlbumArtistaEntity} from '../album-artista/album-artista.entity';
import {ImagenService} from '../imagen/imagen.service';
import {GeneroArtistaAlbumCancionService} from '../genero-artista-album-cancion/genero-artista-album-cancion.service';
import {AlbumArtistaService} from '../album-artista/album-artista.service';
import {CancionArtistaService} from '../cancion-artista/cancion-artista.service';
import {CancionArtistaEntity} from '../cancion-artista/cancion-artista.entity';
import {AlbumCancionService} from '../album-cancion/album-cancion.service';
import {EnlaceAlbumCancionArtistaVideoEntity} from '../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.entity';
import {EnlaceAlbumCancionArtistaVideoService} from '../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.service';

@Injectable()
export class CancionService extends PrincipalService<CancionEntity> {
    constructor(
        @InjectRepository(CancionEntity)
        private readonly _cancionRepository: Repository<CancionEntity>,
        private readonly _imagenService: ImagenService,
        private readonly _generoArtistaAlbumCancionService: GeneroArtistaAlbumCancionService,
        private readonly _cancionArtistaService: CancionArtistaService,
        private readonly _albumCancionService: AlbumCancionService,
        private readonly _enlaceAlbumCancionArtistaVideoService: EnlaceAlbumCancionArtistaVideoService
    ) {
        super(_cancionRepository, CancionEntity);
    }

    async guardarCancionAlbumArtistasGenerosImagen(
        cancion: CancionEntity,
        generos: number[],
        artistas: Array<{id: number, esPrincipal: 0 | 1}>,
        albumes: number[],
        enlaces: EnlaceAlbumCancionArtistaVideoEntity[],
        pathAlterno: string,
        imagen: any,
    ): Promise<CancionEntity> {
        try {
            const cancionCreada: CancionEntity = await this.create(cancion);
            if (cancionCreada) {
                const imagenCreada = this._imagenService.guardarImagen(
                    imagen,
                    'cancion',
                    1,
                    cancionCreada.id,
                    pathAlterno
                );
                const generosCancion = generos.map(
                    (genero) => {
                        const generoCancionACrear: GeneroArtistaAlbumCancionEntity = {
                            genero: genero,
                            cancion: cancionCreada.id
                        }
                        return generoCancionACrear;
                    }
                );
                const generosCancionCreados = await this._generoArtistaAlbumCancionService.createMany(generosCancion)
                const artistasCancion = artistas.map(
                    (artista, indice) => {
                        const artistasCancionACrear: CancionArtistaEntity = {
                            esArtistaPrincipal: artista.esPrincipal,
                            artista: artista.id,
                            cancion: cancionCreada.id
                        }
                        return artistasCancionACrear;
                    }
                );
                if (albumes) {
                    await Promise.all(
                        albumes.map(
                            async idAlbum => {
                                await this._albumCancionService.create(
                                    {
                                        cancion: cancionCreada.id,
                                        album: idAlbum,
                                        posicion: await this._albumCancionService.devolverPosicionUltimaCancionAlbum(idAlbum),
                                    }
                                )
                            }
                        )
                    )
                }
                if (enlaces && enlaces.length) {
                    await this._enlaceAlbumCancionArtistaVideoService.guardarEnlaceArtistaAlbumCancionVideo(
                        'cancion',
                        cancionCreada.id,
                        enlaces
                    )
                }

                const artistasCancionCreados = await this._cancionArtistaService.createMany(artistasCancion);
                if (generosCancionCreados && artistasCancionCreados) {
                    const consulta = {
                        where: {
                            id: cancionCreada.id,
                        },
                        relations: [
                            'tipoCancion',
                            'imagenesCancion',
                            'artistasCancion',
                            'artistasCancion.artista',
                            'generosCancion',
                            'generosCancion.genero',
                            'albumesCancion',
                            'albumesCancion.album',
                            'albumesCancion.cancion',
                            'albumesCancion.cancion.tipoCancion',
                            'albumesCancion.cancion.imagenesCancion',
                            'albumesCancion.cancion.artistasCancion',
                            'albumesCancion.cancion.artistasCancion.artista',
                            'albumesCancion.cancion.generosCancion',
                            'albumesCancion.cancion.generosCancion.genero',
                            'albumesCancion.cancion.enlacesCancion',
                            'enlacesCancion'
                        ]
                    }
                    return await this.findOne(consulta);

                } else {
                    this.delete(cancionCreada.id);
                }
            }
        } catch (e) {
            console.error(e);
            throw new BadRequestException(e);
        }
    }

    async editarCancion(
        cancion: CancionEntity,
        generos: number[],
        artistas: Array<{id: number, esPrincipal: 0 | 1}>,
        albumes: number[],
        enlaces: EnlaceAlbumCancionArtistaVideoEntity[],
        idCancion: number,
        pathAlterno: string,
        idImagen: number,
        imagen?,
    ): Promise<CancionEntity> {
        try {
            const cancionEditada: CancionEntity = await this.findOneByIdAndUpdate(idCancion, cancion);
            if (cancionEditada) {
                if (imagen) {
                    const imagenCreada = await this._imagenService.guardarImagen(
                        imagen,
                        'cancion',
                        1,
                        idCancion,
                        pathAlterno,
                        idImagen
                    );
                }
                await this._generoArtistaAlbumCancionService.guardarGenerosPorArtistaAlbumCancion(
                    'cancion',
                    idCancion,
                    generos
                );
                await this._cancionArtistaService.guardarArtistasCancion(
                    idCancion,
                    artistas
                );
                await this._albumCancionService.guardarAlbumesCancion(
                    cancionEditada.id,
                    albumes
                )
                if (enlaces && enlaces.length) {
                    await this._enlaceAlbumCancionArtistaVideoService.guardarEnlaceArtistaAlbumCancionVideo(
                        'cancion',
                        idCancion,
                        enlaces
                    )
                }

                const consulta = {
                    where: {
                        id: cancionEditada.id,
                    },
                    relations: [
                        'tipoCancion',
                        'imagenesCancion',
                        'artistasCancion',
                        'artistasCancion.artista',
                        'generosCancion',
                        'generosCancion.genero',
                        'albumesCancion',
                        'albumesCancion.album',
                        'albumesCancion.cancion',
                        'albumesCancion.cancion.tipoCancion',
                        'albumesCancion.cancion.imagenesCancion',
                        'albumesCancion.cancion.artistasCancion',
                        'albumesCancion.cancion.artistasCancion.artista',
                        'albumesCancion.cancion.generosCancion',
                        'albumesCancion.cancion.generosCancion.genero',
                        'albumesCancion.cancion.enlacesCancion',
                        'enlacesCancion'
                    ]
                }
                return await this.findOne(consulta);
            }
        } catch (e) {
            console.error(e);
            throw new BadRequestException(e);
        }
    }

    async obtenerCancionePorGeneroArtista(
        datosConsultaCanciones
    ) {
        const condicionGenero = datosConsultaCanciones.idGenero ? ' genero.id = :idGenero ' : '';
        const condicionNombre = datosConsultaCanciones.busqueda !== '' ? ' ( cancion.nombre LIKE :busqueda OR cancion.anio = :anio )' : '';
        const condicionArtista = datosConsultaCanciones.idArtista ? ' artista.id = :idArtista AND ' : '';
        const condicionAlbum = datosConsultaCanciones.idAlbum ? ' album.id = :idAlbum AND ' : '';
        const condicionTipoCancion = datosConsultaCanciones.idTipoCancion ? ' tipoCancion.id = :idTipoCancion AND ' : '';
        const seBuscarPorGeneroYNombre = datosConsultaCanciones.idGenero && datosConsultaCanciones.busqueda;
        let consultaAND = '';
        if (seBuscarPorGeneroYNombre) {
            consultaAND = `AND ( ${condicionGenero} AND ${condicionNombre} )`
        } else {
            if (datosConsultaCanciones.idGenero) {
                consultaAND = `AND ${condicionGenero}`
            }
            if (datosConsultaCanciones.busqueda) {
                consultaAND = `AND ${condicionNombre}`
            }
        }
        return await getRepository(CancionEntity)
            .createQueryBuilder('cancion')
            .leftJoinAndSelect('cancion.imagenesCancion', 'imagenCancion')
            .leftJoinAndSelect('cancion.artistasCancion', 'cancionArtista')
            .leftJoinAndSelect('cancionArtista.artista', 'artista')
            .leftJoinAndSelect('cancion.albumesCancion', 'albumCancion')
            .leftJoinAndSelect('albumCancion.album', 'album')
            .leftJoinAndSelect('cancion.generosCancion', 'generoCancion')
            .leftJoinAndSelect('generoCancion.genero', 'genero')
            .leftJoinAndSelect('cancion.tipoCancion', 'tipoCancion')
            .where(`${condicionArtista} ${condicionAlbum} ${condicionTipoCancion} imagenCancion.esPrincipal = :esPrincipal ${consultaAND}`, {
                busqueda: `%${datosConsultaCanciones.busqueda}%`,
                idGenero: datosConsultaCanciones.idGenero,
                esPrincipal: datosConsultaCanciones.esImagenPrincipal,
                idArtista: datosConsultaCanciones.idArtista,
                idAlbum: datosConsultaCanciones.idAlbum,
                anio: datosConsultaCanciones.busqueda,
                idTipoCancion: datosConsultaCanciones.idTipoCancion

            })
            .orderBy('cancion.id', 'DESC')
            .getManyAndCount();
    }
}
