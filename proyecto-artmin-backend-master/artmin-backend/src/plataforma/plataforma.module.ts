import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PlataformaController} from './plataforma.controller';
import {PlataformaEntity} from './plataforma.entity';
import {PlataformaService} from './plataforma.service';

@Module({
    imports: [TypeOrmModule.forFeature([PlataformaEntity], 'default')],
    controllers: [PlataformaController],
    providers: [PlataformaService],
    exports: [PlataformaService],
})
export class PlataformaModule {}
