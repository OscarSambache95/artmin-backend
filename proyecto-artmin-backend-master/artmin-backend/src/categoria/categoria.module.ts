import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CategoriaService} from './categoria.service';
import {CategoriaController} from './categoria.controller';
import {CategoriaEntity} from './categoria.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CategoriaEntity], 'default')],
    controllers: [CategoriaController],
    providers: [CategoriaService],
    exports: [CategoriaService],
})
export class CategoriaModule {}
