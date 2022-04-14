import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like, getRepository} from 'typeorm';
import {AlbumEntity} from './album.entity';
import {PrincipalService} from '../principal/principal-service';
import {ArtistaEntity} from '../artista/artista.entity';
import {GeneroArtistaAlbumCancionEntity} from '../genero-artista-album-cancion/genero-artista-album-cancion.entity';
import {ImagenService} from '../imagen/imagen.service';
import {GeneroArtistaAlbumCancionService} from '../genero-artista-album-cancion/genero-artista-album-cancion.service';
import {AlbumArtistaService} from '../album-artista/album-artista.service';
import {AlbumArtistaEntity} from '../album-artista/album-artista.entity';

@Injectable()
export class AlbumService extends PrincipalService<AlbumEntity> {
    constructor(
        @InjectRepository(AlbumEntity)
        private readonly _albumRepository: Repository<AlbumEntity>,
        private readonly _imagenService: ImagenService,
        private readonly _generoArtistaAlbumCancionService: GeneroArtistaAlbumCancionService,
        private readonly _albumArtistaService: AlbumArtistaService,
    ) {
        super(_albumRepository, AlbumEntity);
    }

    async guardarAlbumArtistasGenerosImagen(
        album: AlbumEntity,
        generos: number[],
        artistas: number[],
        imagen?,
    ): Promise<AlbumEntity> {
        try {
            const albumCreado: AlbumEntity = await this.create(album);
            if (albumCreado) {
                const imagenCreada = this._imagenService.guardarImagen(
                    imagen,
                    'album',
                    1,
                    albumCreado.id,
                    null,
                );
                if (imagenCreada) {
                    const generosAlbum = generos.map(
                        (genero) => {
                            const generoAlbumACrear: GeneroArtistaAlbumCancionEntity = {
                                genero,
                                album: albumCreado.id,
                            };
                            return generoAlbumACrear;
                        },
                    );
                    const generosAlbumesCreados = await this._generoArtistaAlbumCancionService.createMany(generosAlbum);
                    const artistasAlbum = artistas.map(
                        (idArtista) => {
                            const artistasAlbumACrear: AlbumArtistaEntity = {
                                artista: idArtista,
                                album: albumCreado.id,
                            };
                            return artistasAlbumACrear;
                        },
                    );
                    const albumesArtistaCreados = await this._albumArtistaService.createMany(artistasAlbum);
                    if (generosAlbumesCreados && albumesArtistaCreados) {
                        const consulta = {
                            where: {
                                id: albumCreado.id,
                            },
                            relations: [
                                'imagenesAlbum',
                                'generosAlbum',
                                'generosAlbum.genero',
                                'artistasAlbum',
                                'artistasAlbum.artista',
                                'cancionesAlbum',
                                'cancionesAlbum.cancion',
                                'cancionesAlbum.cancion.tipoCancion',
                                'cancionesAlbum.cancion.imagenesCancion',
                                'cancionesAlbum.cancion.artistasCancion',
                                'cancionesAlbum.cancion.artistasCancion.artista',
                                'cancionesAlbum.cancion.generosCancion',
                                'cancionesAlbum.cancion.generosCancion.genero',
                                'cancionesAlbum.cancion.enlacesCancion',
                                'tipoAlbum',
                            ],
                        };
                        return await this.findOne(consulta);

                    } else {
                        this.delete(albumCreado.id);
                    }
                } else {
                    this.delete(albumCreado.id);
                }
            }
        } catch (e) {
            console.error(e);
            throw new BadRequestException(e);
        }
    }

    async editarAlbumArtistaImagenGeneros(
        album: AlbumEntity,
        generos: number[],
        artistas: number[],
        idAlbum: number,
        idImagen: number,
        imagen?,
    ): Promise<AlbumEntity> {
        try {
            const albumEditado: AlbumEntity = await this.findOneByIdAndUpdate(idAlbum, album);
            if (albumEditado) {
                if (imagen) {
                    const imagenCreada = await this._imagenService.guardarImagen(
                        imagen,
                        'album',
                        1,
                        idAlbum,
                        null,
                        idImagen,

                    );
                }
                await this._generoArtistaAlbumCancionService.guardarGenerosPorArtistaAlbumCancion(
                    'album',
                    idAlbum,
                    generos,
                );
                await this._albumArtistaService.guardarArtistasAlbumCancion(
                    idAlbum,
                    artistas,
                );
                const consulta = {
                    where: {
                        id: idAlbum,
                    },
                    relations: [
                        'imagenesAlbum',
                        'generosAlbum',
                        'generosAlbum.genero',
                        'artistasAlbum',
                        'artistasAlbum.artista',
                        'cancionesAlbum',
                        'cancionesAlbum.cancion',
                        'cancionesAlbum.cancion.tipoCancion',
                        'cancionesAlbum.cancion.imagenesCancion',
                        'cancionesAlbum.cancion.artistasCancion',
                        'cancionesAlbum.cancion.artistasCancion.artista',
                        'cancionesAlbum.cancion.generosCancion',
                        'cancionesAlbum.cancion.generosCancion.genero',
                        'cancionesAlbum.cancion.enlacesCancion',
                        'tipoAlbum',
                    ],
                };
                return await this.findOne(consulta);
            }
        } catch (e) {
            console.error(e);
            throw new BadRequestException(e);
        }
    }

    async obtenerAlbumesPorGenero(
        datosConsultaAlbumGeneros,
    ) {
        const condicionGenero = datosConsultaAlbumGeneros.idGenero ? ' genero.id = :idGenero ' : '';
        const condicionNombre = datosConsultaAlbumGeneros.busqueda !== '' ? ' ( album.nombre LIKE :busqueda OR album.anio = :anio )' : '';
        const condicionArtista = datosConsultaAlbumGeneros.idArtista ? ' artista.id = :idArtista AND ' : '';
        const condicionTipoAlbum = datosConsultaAlbumGeneros.idTipoAlbum ? ' tipoAlbum.id = :idTipoAlbum AND ' : '';
        const seBuscarPorGeneroYNombre = datosConsultaAlbumGeneros.idGenero && datosConsultaAlbumGeneros.busqueda;
        let consultaAND = '';
        if (seBuscarPorGeneroYNombre) {
            consultaAND = `AND ( ${condicionGenero} AND ${condicionNombre} )`;
        } else {
            if (datosConsultaAlbumGeneros.idGenero) {
                consultaAND = `AND ${condicionGenero}`;
            }
            if (datosConsultaAlbumGeneros.busqueda) {
                consultaAND = `AND ${condicionNombre}`;
            }
        }
        return await getRepository(AlbumEntity)
            .createQueryBuilder('album')
            .innerJoinAndSelect('album.imagenesAlbum', 'imagenAlbum')
            .innerJoin('album.artistasAlbum', 'albumArtista')
            .innerJoin('albumArtista.artista', 'artista')
            .innerJoin('album.generosAlbum', 'generoAlbum')
            .innerJoin('album.tipoAlbum', 'tipoAlbum')
            .innerJoin('generoAlbum.genero', 'genero')
            .where(`${condicionArtista} ${condicionTipoAlbum} imagenAlbum.esPrincipal = :esPrincipal ${consultaAND}`, {
                busqueda: `%${datosConsultaAlbumGeneros.busqueda}%`,
                idGenero: datosConsultaAlbumGeneros.idGenero,
                esPrincipal: datosConsultaAlbumGeneros.esImagenPrincipal,
                idArtista: datosConsultaAlbumGeneros.idArtista,
                idTipoAlbum: datosConsultaAlbumGeneros.idTipoAlbum,
                anio: datosConsultaAlbumGeneros.busqueda,

            })
            .orderBy('album.id', 'DESC')
            .getManyAndCount();
    }
}
