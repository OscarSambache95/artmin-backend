import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ArtistaTourEntity} from './artista-tour.entity';
import {ArtistaTourService} from './artista-tour.service';
import {ArtistaTourController} from './artista-tour.controller';

@Module({
    imports: [TypeOrmModule.forFeature([ArtistaTourEntity], 'default')],
    controllers: [ArtistaTourController],
    providers: [ArtistaTourService],
    exports: [ArtistaTourService],
})
export class ArtistaTourModule {}
