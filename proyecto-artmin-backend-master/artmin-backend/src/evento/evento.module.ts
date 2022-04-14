import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {EventoEntity} from './evento.entity';
import {EventoController} from './evento.controller';
import {EventoService} from './evento.service';

@Module({
    imports: [TypeOrmModule.forFeature([EventoEntity], 'default')],
    controllers: [EventoController],
    providers: [EventoService],
    exports: [EventoService],
})
export class EventoModule {}
