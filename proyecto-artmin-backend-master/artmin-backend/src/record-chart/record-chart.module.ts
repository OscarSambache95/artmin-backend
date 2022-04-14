import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {RecordChartController} from './record-chart.controller';
import {RecordChartEntity} from './record-chart.entity';
import {RecordChartService} from './record-chart.service';

@Module({
    imports: [TypeOrmModule.forFeature([RecordChartEntity], 'default')],
    controllers: [RecordChartController],
    providers: [RecordChartService],
    exports: [RecordChartService],
})
export class RecordChartModule {}
