import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {UnidadAlbumCancionVideoEntity} from './unidad-album-cancion-video.entity';
import {getRepository} from 'typeorm/index';

@Injectable()
export class UnidadAlbumCancionVideoService extends PrincipalService<UnidadAlbumCancionVideoEntity> {
    constructor(
        @InjectRepository(UnidadAlbumCancionVideoEntity)
        private readonly _unidadAlbumCancionVideoRepository: Repository<UnidadAlbumCancionVideoEntity>,
    ) {
        super(_unidadAlbumCancionVideoRepository, UnidadAlbumCancionVideoEntity);
    }

    async obtenerUnidadesCancionesAlbumsVideos(
        datosConsultaUnidades
    ) {
        let condicionNombre = '';
        let condicionArtista = datosConsultaUnidades.idArtista !== '' ? ' ( artista.id = :idArtista )' : '';
        let condicionAChart= datosConsultaUnidades.idChart !== '' ? ' ( chart.id = :idChart )' : '';

        const consultaBase = await getRepository(UnidadAlbumCancionVideoEntity)
            .createQueryBuilder('unidadAlbumCancionVideo')
            .leftJoinAndSelect('unidadAlbumCancionVideo.chart', 'chart')
            .leftJoinAndSelect('unidadAlbumCancionVideo.medida', 'medida')
        if (datosConsultaUnidades.tipo === 'cancion'){
            condicionNombre = datosConsultaUnidades.busqueda !== '' ? ' ( cancion.nombre LIKE :busqueda )' : '';
            consultaBase
                .leftJoinAndSelect('unidadAlbumCancionVideo.cancion', 'cancion')
                .leftJoinAndSelect('cancion.imagenesCancion', 'imagenCancion')
                .leftJoinAndSelect('cancion.artistasCancion', 'cancionArtista')
                .leftJoinAndSelect('cancionArtista.artista', 'artista')
        }
        if (datosConsultaUnidades.tipo === 'album'){
            condicionNombre = datosConsultaUnidades.busqueda !== '' ? ' ( album.nombre LIKE :busqueda )' : '';
            consultaBase
                .leftJoinAndSelect('unidadAlbumCancionVideo.album', 'album')
                .leftJoinAndSelect('album.imagenesAlbum', 'imagenAlbum')
                .leftJoinAndSelect('album.artistasAlbum', 'albumArtista')
                .leftJoinAndSelect('albumArtista.artista', 'artista')
        }
        if (datosConsultaUnidades.tipo === 'video'){
            condicionNombre = datosConsultaUnidades.busqueda !== '' ? ' ( video.nombre LIKE :busqueda )' : '';
            consultaBase
                .leftJoinAndSelect('unidadAlbumCancionVideo.video', 'video')
                .leftJoinAndSelect('video.cancion', 'cancion')
                .leftJoinAndSelect('cancion.artistasCancion', 'cancionArtista')
                .leftJoinAndSelect('cancionArtista.artista', 'artista')
        }
        const arregloCondiciones = [
            condicionArtista,
            condicionAChart,
            condicionNombre,
        ].filter(condicion => condicion !== '');
        const condicion = arregloCondiciones.reduce((cadena, condicion, indice) => {
            return cadena + ' ' + condicion + (indice + 1 === arregloCondiciones.length ? '' : ' AND ');
        }, '');
        return consultaBase
            .where(condicion, {
                busqueda: `%${datosConsultaUnidades.busqueda}%`,
                idArtista: datosConsultaUnidades.idArtista,
                idChart: datosConsultaUnidades.idChart,
            })
            .orderBy('unidadAlbumCancionVideo.unidadesReales', 'ASC')
            .getManyAndCount();
    }
}
