import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ChartEntity} from './chart.entity';
import {ChartController} from './chart.controller';
import {ChartService} from './chart.service';

@Module({
    imports: [TypeOrmModule.forFeature([ChartEntity], 'default')],
    controllers: [ChartController],
    providers: [ChartService],
    exports: [ChartService],
})
export class ChartModule {}
