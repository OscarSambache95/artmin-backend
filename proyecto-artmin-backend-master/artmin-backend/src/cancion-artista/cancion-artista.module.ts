import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CancionArtistaService} from './cancion-artista.service';
import {CancionArtistaEntity} from './cancion-artista.entity';
import {CancionArtistaController} from './cancion-artista.controller';

@Module({
    imports: [TypeOrmModule.forFeature([CancionArtistaEntity], 'default')],
    controllers: [CancionArtistaController],
    providers: [CancionArtistaService],
    exports: [CancionArtistaService],
})
export class CancionArtistaModule {}
