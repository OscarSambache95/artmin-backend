import {BadRequestException, Body, Controller, Get, Post, Query} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {ChartEntity} from './chart.entity';
import {ChartService} from './chart.service';

@Controller('chart')
export class ChartController extends PrincipalAbstractController<ChartEntity> {
    constructor(private readonly _chartService: ChartService,
    ) {
        super(_chartService);
    }
    @Get('obtener-charts-lugar-plataforma')
    async obtenerCharts(
        @Query('datosConsulta') datosConsultaCharts) {
        const existeDatos = datosConsultaCharts;
        if (existeDatos) {
            return await this._chartService.obtenerCharts(
                JSON.parse(datosConsultaCharts),
            );
        } else {
            throw new BadRequestException('No envía parámetros');
        }
    }

}
