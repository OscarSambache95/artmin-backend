import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PremioAnioEntity} from './premio-anio.entity';
import {PremioAnioService} from './premio-anio.service';
import {PremioAnioController} from './premio-anio.controller';

@Module({
    imports: [TypeOrmModule.forFeature([PremioAnioEntity], 'default')],
    controllers: [PremioAnioController],
    providers: [PremioAnioService],
    exports: [PremioAnioService],
})
export class PremioAnioModule {}
