import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {GeneroEntity} from './genero.entity';
import {GeneroService} from './genero.service';
import {GeneroController} from './genero.controller';

@Module({
    imports: [TypeOrmModule.forFeature([GeneroEntity], 'default')],
    controllers: [GeneroController],
    providers: [GeneroService],
    exports: [GeneroService],
})
export class GeneroModule {}
