import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like, getRepository} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {RecordChartEntity} from './record-chart.entity';

@Injectable()
export class RecordChartService extends PrincipalService<RecordChartEntity> {
    constructor(
        @InjectRepository(RecordChartEntity)
        private readonly _recordChartRepository: Repository<RecordChartEntity>,
    ) {
        super(_recordChartRepository, RecordChartEntity);
    }


    async obtenerRecordsChart(
        datosConsultaRecords
    ) {
        let condicionNombre = '';
        let condicionArtista = datosConsultaRecords.idArtista !== '' ? ' ( artista.id = :idArtista )' : '';
        let condicionAChart = datosConsultaRecords.idChart !== '' ? ' ( chart.id = :idChart )' : '';
        let condicionACertificado = datosConsultaRecords.idRecord ? ' ( record.id = :idRecord )' : '';

        const consultaBase = await getRepository(RecordChartEntity)
            .createQueryBuilder('recordChart')
            .leftJoinAndSelect('recordChart.chart', 'chart')
            .leftJoinAndSelect('recordChart.medida', 'medida')
            .leftJoinAndSelect('recordChart.record', 'record')

        if (datosConsultaRecords.tipo === 'cancion') {
            condicionNombre = datosConsultaRecords.busqueda !== '' ? ' ( cancion.nombre LIKE :busqueda )' : '';
            consultaBase
                .leftJoinAndSelect('recordChart.cancion', 'cancion')
                .leftJoinAndSelect('cancion.imagenesCancion', 'imagenCancion')
                .leftJoinAndSelect('cancion.artistasCancion', 'cancionArtista')
                .leftJoinAndSelect('cancionArtista.artista', 'artista')
        }
        if (datosConsultaRecords.tipo === 'album') {
            condicionNombre = datosConsultaRecords.busqueda !== '' ? ' ( album.nombre LIKE :busqueda )' : '';
            consultaBase
                .leftJoinAndSelect('recordChart.album', 'album')
                .leftJoinAndSelect('album.imagenesAlbum', 'imagenAlbum')
                .leftJoinAndSelect('album.artistasAlbum', 'albumArtista')
                .leftJoinAndSelect('albumArtista.artista', 'artista')
        }
        if (datosConsultaRecords.tipo === 'video') {
            condicionNombre = datosConsultaRecords.busqueda !== '' ? ' ( video.nombre LIKE :busqueda )' : '';
            consultaBase
                .leftJoinAndSelect('recordChart.video', 'video')
                .leftJoinAndSelect('video.cancion', 'cancion')
                .leftJoinAndSelect('cancion.artistasCancion', 'cancionArtista')
                .leftJoinAndSelect('cancionArtista.artista', 'artista')
        }
        const arregloCondiciones = [
            condicionArtista,
            condicionAChart,
            condicionACertificado,
            condicionNombre,
        ].filter(condicion => condicion !== '');
        const condicion = arregloCondiciones.reduce((cadena, condicion, indice) => {
            return cadena + ' ' + condicion + (indice + 1 === arregloCondiciones.length ? '' : ' AND ');
        }, '');
        return consultaBase
            .where(condicion, {
                busqueda: `%${datosConsultaRecords.busqueda}%`,
                idArtista: datosConsultaRecords.idArtista,
                idChart: datosConsultaRecords.idChart,
                idRecord: datosConsultaRecords.idRecord,
            })
            .orderBy('recordChart.fechaRecord', 'DESC')
            .getManyAndCount();
    }
}
