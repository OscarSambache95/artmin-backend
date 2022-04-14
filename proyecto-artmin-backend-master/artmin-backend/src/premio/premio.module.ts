import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PremioController} from './premio.controller';
import {PremioService} from './premio.service';
import {PremioEntity} from './premio.entity';

@Module({
    imports: [TypeOrmModule.forFeature([PremioEntity], 'default')],
    controllers: [PremioController],
    providers: [PremioService],
    exports: [PremioService],
})
export class PremioModule {}
