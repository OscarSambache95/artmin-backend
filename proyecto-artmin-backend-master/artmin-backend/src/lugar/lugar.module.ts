import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {LugarEntity} from './lugar.entity';
import {LugarController} from './lugar.controller';
import {LugarService} from './lugar.service';
import {ImagenModule} from '../imagen/imagen.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([LugarEntity], 'default'),
        ImagenModule,
    ],
    controllers: [LugarController],
    providers: [LugarService],
    exports: [LugarService],
})
export class LugarModule {}
