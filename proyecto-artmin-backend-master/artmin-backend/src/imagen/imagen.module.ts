import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ImagenService} from './imagen.service';
import {ImagenEntity} from './imagen.entity';
import {ImagenController} from './imagen.controller';
import {ImagenSubscriber} from './imagen.subscriber';

@Module({
    imports: [TypeOrmModule.forFeature([ImagenEntity], 'default')],
    controllers: [ImagenController],
    providers: [
        ImagenService,
        ImagenSubscriber
    ],
    exports: [ImagenService],
})
export class ImagenModule {}
