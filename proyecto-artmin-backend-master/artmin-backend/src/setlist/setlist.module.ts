import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {SetlistService} from './setlist.service';
import {SetlistController} from './setlist.controller';
import {SetlistEntity} from './setlist.entity';

@Module({
    imports: [TypeOrmModule.forFeature([SetlistEntity], 'default')],
    controllers: [SetlistController],
    providers: [SetlistService],
    exports: [SetlistService],
})
export class SetlistModule {}
