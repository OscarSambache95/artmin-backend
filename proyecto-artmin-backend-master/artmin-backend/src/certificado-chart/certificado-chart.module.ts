import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CertificadoChartEntity} from './certificado-chart.entity';
import {CertificadoChartService} from './certificado-chart.service';
import {CertificadoChartController} from './certificado-chart.controller';
import {CertificadoChartFechaModule} from '../certificado-chart-fecha/certificado-chart-fecha.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([CertificadoChartEntity], 'default'),
        CertificadoChartFechaModule
    ],
    controllers: [CertificadoChartController],
    providers: [CertificadoChartService],
    exports: [CertificadoChartService],
})
export class CertificadoChartModule {}
