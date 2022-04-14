import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {RecintoEntity} from './recinto.entity';
import {RecintoController} from './recinto.controller';
import {RecintoService} from './recinto.service';

@Module({
    imports: [TypeOrmModule.forFeature([RecintoEntity], 'default')],
    controllers: [RecintoController],
    providers: [RecintoService],
    exports: [RecintoService],
})
export class RecintoModule {}
