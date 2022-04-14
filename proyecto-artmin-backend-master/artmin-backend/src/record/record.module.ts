import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {RecordEntity} from './record.entity';
import {RecordService} from './record.service';
import {RecordController} from './record.controller';

@Module({
    imports: [TypeOrmModule.forFeature([RecordEntity], 'default')],
    controllers: [RecordController],
    providers: [RecordService],
    exports: [RecordService],
})
export class RecordModule {}
