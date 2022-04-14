import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TourService } from './tour.service';
import { TourController } from './tour.controller';
import { TourEntity } from './tour.entity';
import { ImagenModule } from '../imagen/imagen.module';
import { ArtistaTourModule } from '../artista-tour/artista-tour.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([TourEntity], 'default'),
    ImagenModule,
    ArtistaTourModule,
  ],
  controllers: [TourController],
  providers: [TourService],
  exports: [TourService],
})
export class TourModule {
}
