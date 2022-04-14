import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ChartPosicionEntity} from './chart-posicion.entity';
import {ChartPosicionService} from './chart-posicion.service';
import {ChartPosicionController} from './chart-posicion.controller';

@Module({
    imports: [TypeOrmModule.forFeature([ChartPosicionEntity], 'default')],
    controllers: [ChartPosicionController],
    providers: [ChartPosicionService],
    exports: [ChartPosicionService],
})
export class ChartPosicionModule {}
