import {BadRequestException, Body, Controller, Get, Post, Query} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {RecordChartEntity} from './record-chart.entity';
import {RecordChartService} from './record-chart.service';

@Controller('record-chart')
export class RecordChartController extends PrincipalAbstractController<RecordChartEntity> {
    constructor(private readonly _recordChartService: RecordChartService,
    ) {
        super(_recordChartService);
    }

    @Get('obtener-records')
    async obtenerCharts(
        @Query('datosConsulta') datosConsultaRecords) {
        const existeDatos = datosConsultaRecords;
        if (existeDatos) {
            return await this._recordChartService
                .obtenerRecordsChart(
                    JSON.parse(datosConsultaRecords),
                );
        } else {
            throw new BadRequestException('No envía parámetros');
        }
    }
}
