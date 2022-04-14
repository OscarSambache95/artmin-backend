import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {TipoEventoEntity} from './tipo-evento.entity';
import {TipoEventoController} from './tipo-evento.controller';
import {TipoEventoService} from './tipo-evento.service';

@Module({
    imports: [TypeOrmModule.forFeature([TipoEventoEntity], 'default')],
    controllers: [TipoEventoController],
    providers: [TipoEventoService],
    exports: [TipoEventoService],
})
export class TipoEventoModule {}
