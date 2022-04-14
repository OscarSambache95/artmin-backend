import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CertificadoChartFechaEntity} from './certificado-chart-fecha.entity';
import {CertificadoChartFechaController} from './certificado-chart-fecha.controller';
import {CertificadoChartFechaService} from './certificado-chart-fecha.service';

@Module({
    imports: [TypeOrmModule.forFeature([CertificadoChartFechaEntity], 'default')],
    controllers: [CertificadoChartFechaController],
    providers: [CertificadoChartFechaService],
    exports: [CertificadoChartFechaService],
})
export class CertificadoChartFechaModule {}
