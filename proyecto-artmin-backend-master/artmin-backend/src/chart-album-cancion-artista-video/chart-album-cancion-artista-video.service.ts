import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {ChartAlbumCancionArtistaVideoEntity} from './chart-album-cancion-artista-video.entity';
import {getRepository} from 'typeorm/index';

@Injectable()
export class ChartAlbumCancionArtistaVideoService extends PrincipalService<ChartAlbumCancionArtistaVideoEntity> {
    constructor(
        @InjectRepository(ChartAlbumCancionArtistaVideoEntity)
        private readonly _chartAlbumCancionArtistaVideoRepository: Repository<ChartAlbumCancionArtistaVideoEntity>,
    ) {
        super(_chartAlbumCancionArtistaVideoRepository, ChartAlbumCancionArtistaVideoEntity);
    }
    async obtenerChartsCancionesAlbumsArtistasVideos(
        datosConsultaChart
    ) {
        let condicionNombre = '';
        let condicionArtista = datosConsultaChart.idArtista !== '' ? ' ( artista.id = :idArtista )' : '';
        let condicionAChart= datosConsultaChart.idChart !== '' ? ' ( chart.id = :idChart )' : '';

        const consultaBase = await getRepository(ChartAlbumCancionArtistaVideoEntity)
            .createQueryBuilder('chartAlbumCancionArtistaVideo')
            .leftJoinAndSelect('chartAlbumCancionArtistaVideo.chart', 'chart')
        if (datosConsultaChart.tipo === 'cancion'){
            condicionNombre = datosConsultaChart.busqueda !== '' ? ' ( cancion.nombre LIKE :busqueda )' : '';
            consultaBase
                .leftJoinAndSelect('chartAlbumCancionArtistaVideo.cancion', 'cancion')
                .leftJoinAndSelect('cancion.imagenesCancion', 'imagenCancion')
                .leftJoinAndSelect('cancion.artistasCancion', 'cancionArtista')
                .leftJoinAndSelect('cancionArtista.artista', 'artista')
        }
        if (datosConsultaChart.tipo === 'album'){
            condicionNombre = datosConsultaChart.busqueda !== '' ? ' ( album.nombre LIKE :busqueda )' : '';
            consultaBase
                .leftJoinAndSelect('chartAlbumCancionArtistaVideo.album', 'album')
                .leftJoinAndSelect('album.imagenesAlbum', 'imagenAlbum')
                .leftJoinAndSelect('album.artistasAlbum', 'albumArtista')
                .leftJoinAndSelect('albumArtista.artista', 'artista')
        }
        if (datosConsultaChart.tipo === 'video'){
            condicionNombre = datosConsultaChart.busqueda !== '' ? ' ( video.nombre LIKE :busqueda )' : '';
            consultaBase
                .leftJoinAndSelect('chartAlbumCancionArtistaVideo.video', 'video')
                .leftJoinAndSelect('video.cancion', 'cancion')
                .leftJoinAndSelect('cancion.artistasCancion', 'cancionArtista')
                .leftJoinAndSelect('cancionArtista.artista', 'artista')
        }
        const condicionTop = datosConsultaChart.top  ? ' ( chartAlbumCancionArtistaVideo.peak <= :top )' : '';
        const arregloCondiciones = [
            condicionArtista,
            condicionAChart,
            condicionNombre,
            condicionTop,
        ].filter(condicion => condicion !== '');
        const condicion = arregloCondiciones.reduce((cadena, condicion, indice) => {
            return cadena + ' ' + condicion + (indice + 1 === arregloCondiciones.length ? '' : ' AND ');
        }, '');
        return consultaBase
            .where(condicion, {
                busqueda: `%${datosConsultaChart.busqueda}%`,
                top: datosConsultaChart.top,
                idArtista: datosConsultaChart.idArtista,
                idChart: datosConsultaChart.idChart,
            })
            .orderBy('chartAlbumCancionArtistaVideo.peak', 'ASC')
            .getManyAndCount();
    }

}
