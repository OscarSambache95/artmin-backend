import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {ChartEntity} from './chart.entity';
import {getRepository} from 'typeorm/index';

@Injectable()
export class ChartService extends PrincipalService<ChartEntity> {
    constructor(
        @InjectRepository(ChartEntity)
        private readonly _chartRepository: Repository<ChartEntity>,
    ) {
        super(_chartRepository, ChartEntity);
    }

    async obtenerCharts(
        datosConsultaChart
    ) {
        const condicionPlataforma = datosConsultaChart.idPlataforma ? ' plataforma.id = :idPlataforma ' : '';
        const condicionNombre = datosConsultaChart.busqueda !== '' ? ' ( chart.nombre LIKE :busqueda )' : '';
        const condicionLugar = datosConsultaChart.idLugar ? ' lugar.id = :idLugar ' : '';
        const condicionTipoChart = datosConsultaChart.tipoChart ? ' chart.tipo = :tipoChart ' : '';
        const arregloCondiciones = [
            condicionPlataforma,
            condicionLugar,
            condicionTipoChart,
            condicionNombre,
        ].filter(condicion => condicion !== '');
        const condicion = arregloCondiciones.reduce((cadena, condicion, indice) => {
            return cadena + ' ' + condicion + (indice + 1 === arregloCondiciones.length ? '' : 'AND');
        }, '');
        return await getRepository(ChartEntity)
            .createQueryBuilder('chart')
            .leftJoinAndSelect('chart.plataforma', 'plataforma')
            .leftJoinAndSelect('plataforma.imagenesPlataforma', 'imagenesPlataforma')
            .leftJoinAndSelect('chart.lugar', 'lugar')
            .leftJoinAndSelect('lugar.imagenesLugar', 'imagenesLugar')
            .where(condicion, {
                busqueda: `%${datosConsultaChart.busqueda}%`,
                idPlataforma: datosConsultaChart.idPlataforma,
                idLugar: datosConsultaChart.idLugar,
                tipoChart: datosConsultaChart.tipoChart

            })
            .orderBy('chart.id', 'DESC')
            .getManyAndCount();
    }
}
