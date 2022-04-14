import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PresentacionController} from './presentacion.controller';
import {PresentacionEntity} from './presentacion.entity';
import {PresentacionService} from './presentacion.service';

@Module({
    imports: [TypeOrmModule.forFeature([PresentacionEntity], 'default')],
    controllers: [PresentacionController],
    providers: [PresentacionService],
    exports: [PresentacionService],
})
export class PresentacionModule {}
