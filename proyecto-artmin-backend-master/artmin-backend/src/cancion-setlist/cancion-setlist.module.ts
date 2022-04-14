import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CancionSetlistEntity} from './cancion-setlist.entity';
import {CancionSetlistController} from './cancion-setlist.controller';
import {CancionSetlistService} from './cancion-setlist.service';

@Module({
    imports: [TypeOrmModule.forFeature([CancionSetlistEntity], 'default')],
    controllers: [CancionSetlistController],
    providers: [CancionSetlistService],
    exports: [CancionSetlistService],
})
export class CancionSetlistModule {}
