import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like, getRepository} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {ArtistaEntity} from './artista.entity';
import {GeneroEntity} from '../genero/genero.entity';
import {ImagenService} from '../imagen/imagen.service';
import {GeneroArtistaAlbumCancionService} from '../genero-artista-album-cancion/genero-artista-album-cancion.service';
import {GeneroArtistaAlbumCancionEntity} from '../genero-artista-album-cancion/genero-artista-album-cancion.entity';
import {EnlaceAlbumCancionArtistaVideoEntity} from '../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.entity';
import {EnlaceAlbumCancionArtistaVideoService} from '../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.service';

@Injectable()
export class ArtistaService extends PrincipalService<ArtistaEntity> {
    constructor(
        @InjectRepository(ArtistaEntity)
        private readonly _artistaRepository: Repository<ArtistaEntity>,
        private readonly _imagenService: ImagenService,
        private readonly _generoArtistaAlbumCancionService: GeneroArtistaAlbumCancionService,
        private readonly _enlaceAlbumCancionArtistaVideoService: EnlaceAlbumCancionArtistaVideoService
    ) {
        super(_artistaRepository, ArtistaEntity);
    }

    async guardarArtistaImagen(
        artista: ArtistaEntity,
        generos: number[],
        enlaces: EnlaceAlbumCancionArtistaVideoEntity[],
        imagen?
    ): Promise<ArtistaEntity> {
        try {
            const artistaCreado: ArtistaEntity = await this.create(artista);
            if (artistaCreado) {
                const imagenCreada = this._imagenService.guardarImagen(
                    imagen,
                    'artista',
                    1,
                    artistaCreado.id,
                    null
                );
                if (imagenCreada) {
                    const generosArtista = generos.map(
                        (genero) => {
                            const generoArtistaACrear: GeneroArtistaAlbumCancionEntity = {
                                genero: genero,
                                artista: artistaCreado.id
                            }
                            return generoArtistaACrear;
                        }
                    );
                    const generosArtistaCreados = await this._generoArtistaAlbumCancionService.createMany(generosArtista)

                    await this._enlaceAlbumCancionArtistaVideoService.guardarEnlaceArtistaAlbumCancionVideo(
                        'artista',
                        artistaCreado.id,
                        enlaces
                    )
                    if (generosArtistaCreados) {
                        const consulta = {
                            where: {
                                id: artistaCreado.id,
                            },
                            relations: [
                                'imagenesArtista',
                                'generosArtista',
                                'generosArtista.genero',
                                'enlacesArtista',
                                'enlacesArtista.plataforma',
                                'enlacesArtista.plataforma.imagenesPlataforma',
                            ]
                        }
                        return await this.findOne(consulta);

                    } else {
                        this.delete(artistaCreado.id);
                    }
                } else {
                    this.delete(artistaCreado.id);
                }
            }
        } catch (e) {
            console.error(e);
            throw new BadRequestException(e);
        }
    }

    async editarArtistaImagen(
        artista: ArtistaEntity,
        generos: number[],
        enlaces: EnlaceAlbumCancionArtistaVideoEntity[],
        idArtista: number,
        idImagen: number,
        imagen?
    ): Promise<ArtistaEntity> {
        try {
            const artistaEditado: ArtistaEntity = await this.findOneByIdAndUpdate(idArtista, artista);
            if (artistaEditado) {
                if (imagen) {
                    const imagenCreada = await this._imagenService.guardarImagen(
                        imagen,
                        'artista',
                        1,
                        artistaEditado.id,
                        null,
                        idImagen
                    );
                }
                await this._generoArtistaAlbumCancionService.guardarGenerosPorArtistaAlbumCancion(
                    'artista',
                    idArtista,
                    generos
                )
                await this._enlaceAlbumCancionArtistaVideoService.guardarEnlaceArtistaAlbumCancionVideo(
                    'artista',
                    idArtista,
                    enlaces
                )
                const consulta = {
                    where: {
                        id: artistaEditado.id,
                    },
                    relations: [
                        'imagenesArtista',
                        'generosArtista',
                        'generosArtista.genero',
                        'enlacesArtista',
                        'enlacesArtista.plataforma',
                        'enlacesArtista.plataforma.imagenesPlataforma',
                    ]
                }
                return await this.findOne(consulta);
            }
        } catch (e) {
            console.error(e);
            throw new BadRequestException(e);
        }
    }

    async obtenerArtistasPorGenero(
        datosConsultaArtistaGeneros
    ) {
        const condicionGenero = datosConsultaArtistaGeneros.idGenero ? ' genero.id = :idGenero ' : '';
        const condicionNombre = datosConsultaArtistaGeneros.busqueda !== '' ? ' artista.nombre LIKE :busqueda ' : '';
        const seBuscarPorGeneroYNombre = datosConsultaArtistaGeneros.idGenero && datosConsultaArtistaGeneros.busqueda;
        let consultaAND = '';
        if (seBuscarPorGeneroYNombre) {
            consultaAND = `AND ( ${condicionGenero} AND ${condicionNombre} )`
        } else {
            if (datosConsultaArtistaGeneros.idGenero) {
                consultaAND = `AND ${condicionGenero}`
            }
            if (datosConsultaArtistaGeneros.busqueda) {
                consultaAND = `AND ${condicionNombre}`
            }
        }
        return await getRepository(ArtistaEntity)
            .createQueryBuilder('artista')
            .innerJoinAndSelect('artista.imagenesArtista', 'imagenArtista')
            .innerJoin('artista.generosArtista', 'generoArtista')
            .innerJoin('generoArtista.genero', 'genero')
            .where(`imagenArtista.esPrincipal = :esPrincipal ${consultaAND}`, {
                busqueda: `%${datosConsultaArtistaGeneros.busqueda}%`,
                idGenero: datosConsultaArtistaGeneros.idGenero,
                esPrincipal: datosConsultaArtistaGeneros.esImagenPrincipal

            })
            .orderBy('artista.id', 'DESC')
            .getManyAndCount();
    }
}
