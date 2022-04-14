import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {EventoAnioService} from './evento-anio.service';
import {EventoAnioEntity} from './evento-anio.entity';
import {EventoAnioController} from './evento-anio.controller';

@Module({
    imports: [TypeOrmModule.forFeature([EventoAnioEntity], 'default')],
    controllers: [EventoAnioController],
    providers: [EventoAnioService],
    exports: [EventoAnioService],
})
export class EventoAnioModule {}
