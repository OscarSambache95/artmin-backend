import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CertificadoController} from './certificado.controller';
import {CertificadoService} from './certificado.service';
import {CertificadoEntity} from './certificado.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CertificadoEntity], 'default')],
    controllers: [CertificadoController],
    providers: [CertificadoService],
    exports: [CertificadoService],
})
export class CertificadoModule {}
