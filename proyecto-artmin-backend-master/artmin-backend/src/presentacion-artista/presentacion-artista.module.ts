import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PresentacionArtistaEntity} from './presentacion-artista.entity';
import {PresentacionArtistaController} from './presentacion-artista.controller';
import {PresentacionArtistaService} from './presentacion-artista.service';

@Module({
    imports: [TypeOrmModule.forFeature([PresentacionArtistaEntity], 'default')],
    controllers: [PresentacionArtistaController],
    providers: [PresentacionArtistaService],
    exports: [PresentacionArtistaService],
})
export class PresentacionArtistaModule {}
