import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {MedidaEntity} from './medida.entity';
import {MedidaService} from './medida.service';
import {MedidaController} from './medida.controller';

@Module({
    imports: [TypeOrmModule.forFeature([MedidaEntity], 'default')],
    controllers: [MedidaController],
    providers: [MedidaService],
    exports: [MedidaService],
})
export class MedidaModule {}
