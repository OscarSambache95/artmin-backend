import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {VideoEntity} from './video.entity';
import {getRepository} from 'typeorm/index';
import {EnlaceAlbumCancionArtistaVideoEntity} from '../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.entity';
import {EnlaceAlbumCancionArtistaVideoService} from '../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.service';

@Injectable()
export class VideoService extends PrincipalService<VideoEntity> {
    constructor(
        @InjectRepository(VideoEntity)
        private readonly _videoRepository: Repository<VideoEntity>,
        private readonly _enlaceAlbumCancionArtistaVideoService: EnlaceAlbumCancionArtistaVideoService
    ) {
        super(_videoRepository, VideoEntity);
    }

    async guardarVideo(
        video: VideoEntity,
        enlaces: EnlaceAlbumCancionArtistaVideoEntity[],
    ): Promise<VideoEntity> {
        try {
            const videoCreado: VideoEntity = await this.create(video);
            if (videoCreado) {
                if (enlaces && enlaces.length) {
                    await this._enlaceAlbumCancionArtistaVideoService.guardarEnlaceArtistaAlbumCancionVideo(
                        'video',
                        videoCreado.id,
                        enlaces
                    )
                }
                const consulta = {
                    where: {
                        id: videoCreado.id,
                    },
                    relations: [
                        'tipoVideo',
                        'cancion',
                        'cancion.imagenesCancion',
                        'cancion.artistasCancion',
                        'cancion.artistasCancion.artista',
                        'cancion.albumesCancion',
                        'cancion.albumesCancion.album',
                        'enlacesVideo'
                    ]
                }
                return await this.findOne(consulta);
            }
        } catch (e) {
            console.error(e);
            throw new BadRequestException(e);
        }
    }

    async editarVideo(
        video: VideoEntity,
        enlaces: EnlaceAlbumCancionArtistaVideoEntity[],
        idVideo: number,
    ): Promise<VideoEntity> {
        try {
            const videoEditado: VideoEntity = await this.findOneByIdAndUpdate(idVideo, video);
            if (videoEditado) {
                if (enlaces && enlaces.length) {
                    await this._enlaceAlbumCancionArtistaVideoService.guardarEnlaceArtistaAlbumCancionVideo(
                        'video',
                        idVideo,
                        enlaces
                    )
                }

                const consulta = {
                    where: {
                        id: videoEditado.id,
                    },
                    relations: [
                        'tipoVideo',
                        'cancion',
                        'cancion.imagenesCancion',
                        'cancion.artistasCancion',
                        'cancion.artistasCancion.artista',
                        'cancion.albumesCancion',
                        'cancion.albumesCancion.album',
                        'enlacesVideo'
                    ]
                }
                return await this.findOne(consulta);
            }
        } catch (e) {
            console.error(e);
            throw new BadRequestException(e);
        }
    }

    async obtenerVideos(
        datosConsultaVideo
    ) {
        const condicionCancion = datosConsultaVideo.idCancion ? ' cancion.id = :idCancion ' : '';
        const condicionNombre = datosConsultaVideo.busqueda !== '' ? ' ( video.nombre LIKE :busqueda OR video.anio = :anio )' : '';
        const condicionArtista = datosConsultaVideo.idArtista ? ' artista.id = :idArtista ' : '';
        const condicionAlbum = datosConsultaVideo.idAlbum ? ' album.id = :idAlbum ' : '';
        const condicionTipoVideo = datosConsultaVideo.idTipoVideo ? ' tipoVideo.id = :idTipoVideo ' : '';
        const arregloCondiciones = [
            condicionCancion,
            condicionArtista,
            condicionAlbum,
            condicionTipoVideo,
            condicionNombre,
        ].filter(condicion => condicion !== '');
        const condicion = arregloCondiciones.reduce((cadena, condicion, indice) => {
            return cadena + ' ' + condicion + (indice + 1 === arregloCondiciones.length ? '' : 'AND');
        }, '');
        return await getRepository(VideoEntity)
            .createQueryBuilder('video')
            .leftJoinAndSelect('video.cancion', 'cancion')
            .leftJoinAndSelect('cancion.artistasCancion', 'cancionArtista')
            .leftJoinAndSelect('cancionArtista.artista', 'artista')
            .leftJoinAndSelect('cancion.albumesCancion', 'albumCancion')
            .leftJoinAndSelect('albumCancion.album', 'album')
            .leftJoinAndSelect('video.tipoVideo', 'tipoVideo')
            .leftJoinAndSelect('video.enlacesVideo', 'enlacesVideo')
            .where(condicion, {
                busqueda: `%${datosConsultaVideo.busqueda}%`,
                idCancion: datosConsultaVideo.idCancion,
                idArtista: datosConsultaVideo.idArtista,
                idAlbum: datosConsultaVideo.idAlbum,
                anio: datosConsultaVideo.busqueda,
                idTipoVideo: datosConsultaVideo.idTipoVideo

            })
            .orderBy('video.id', 'DESC')
            .getManyAndCount();
    }
}
