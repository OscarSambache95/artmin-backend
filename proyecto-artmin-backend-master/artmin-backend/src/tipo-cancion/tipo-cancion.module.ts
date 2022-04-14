import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {TipoCancionEntity} from './tipo-cancion.entity';
import {TipoCancionController} from './tipo-cancion.controller';
import {TipoCancionService} from './tipo-cancion.service';

@Module({
    imports: [TypeOrmModule.forFeature([TipoCancionEntity], 'default')],
    controllers: [TipoCancionController],
    providers: [TipoCancionService],
    exports: [TipoCancionService],
})
export class TipoCancionModule {}
