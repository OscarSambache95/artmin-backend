import {
    BadRequestException,
    Body,
    Controller,
    FileInterceptor,
    Get,
    Post,
    Query, UploadedFile,
    UseInterceptors
} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {CertificadoChartEntity} from './certificado-chart.entity';
import {CertificadoChartService} from './certificado-chart.service';

@Controller('certificado-chart')
export class CertificadoChartController extends PrincipalAbstractController<CertificadoChartEntity> {
    constructor(private readonly _certificadoChartService: CertificadoChartService,
    ) {
        super(_certificadoChartService);
    }

    @Post('crear-certificado-chart')
    async crearCertificadoChart(
        @Body() datosCertificadosChart,
    ): Promise<CertificadoChartEntity> {
        try {
            return await this._certificadoChartService
                .guardarCertificadoChart(
                    datosCertificadosChart.certificadoChart,
                    datosCertificadosChart.certificadosChartFecha,
            );
        } catch (error) {
            console.error('Error al crear el certificado chart', error);
            throw new BadRequestException('Error al crear el archivo');
        }
    }

    @Post('editar-certificado-chart')
    async editarCertificadoChart(
        @Body() datosCertificadosChart,
    ): Promise<CertificadoChartEntity> {
        try {
            delete datosCertificadosChart.certificadoChart.certificadosChartFecha;
            return await this._certificadoChartService
                .editarCertificadoChart(
                    datosCertificadosChart.idCertificadoChart,
                    datosCertificadosChart.certificadoChart,
                    datosCertificadosChart.certificadosChartFecha,
                );
        } catch (error) {
            console.error('Error al crear el certificado chart', error);
            throw new BadRequestException('Error al crear el archivo');
        }
    }

    @Get('obtener-certificados')
    async obtenerCharts(
        @Query('datosConsulta') datosConsultaCertificados) {
        const existeDatos = datosConsultaCertificados;
        if (existeDatos) {
            return await this._certificadoChartService
                .obtenerCertificadosChart(
                    JSON.parse(datosConsultaCertificados),
                );
        } else {
            throw new BadRequestException('No envía parámetros');
        }
    }
}
