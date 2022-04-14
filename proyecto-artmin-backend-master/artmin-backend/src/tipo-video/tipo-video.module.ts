import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {TipoVideoService} from './tipo-video.service';
import {TipoVideoEntity} from './tipo-video.entity';
import {TipoVideoController} from './tipo-video.controller';

@Module({
    imports: [TypeOrmModule.forFeature([TipoVideoEntity], 'default')],
    controllers: [TipoVideoController],
    providers: [TipoVideoService],
    exports: [TipoVideoService],
})
export class TipoVideoModule {}
