import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {TourLugarController} from './tour-lugar.controller';
import {TourLugarEntity} from './tour-lugar.entity';
import {TourLugarService} from './tour-lugar.service';

@Module({
    imports: [TypeOrmModule.forFeature([TourLugarEntity], 'default')],
    controllers: [TourLugarController],
    providers: [TourLugarService],
    exports: [TourLugarService],
})
export class TourLugarModule {}
