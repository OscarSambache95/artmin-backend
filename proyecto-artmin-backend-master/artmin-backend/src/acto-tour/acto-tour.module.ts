import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ActoTourEntity} from './acto-tour.entity';
import {ActoTourController} from './acto-tour.controller';
import {ActoTourService} from './acto-tour.service';

@Module({
    imports: [TypeOrmModule.forFeature([ActoTourEntity], 'default')],
    controllers: [ActoTourController],
    providers: [ActoTourService],
    exports: [ActoTourService],
})
export class ActoTourModule {}
