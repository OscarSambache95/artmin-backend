import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { TourEntity } from './tour.entity';
import { ImagenService } from '../imagen/imagen.service';
import { ArtistaTourService } from '../artista-tour/artista-tour.service';
export declare class TourService extends PrincipalService<TourEntity> {
    private readonly _tourRepository;
    private readonly _imagenService;
    private readonly _artistaTourService;
    constructor(_tourRepository: Repository<TourEntity>, _imagenService: ImagenService, _artistaTourService: ArtistaTourService);
    obtenerTourPorArtistasTipo(datosConsultaTours: any): Promise<[TourEntity[], number]>;
    guardarTour(tour: any, imagenFile: any): Promise<TourEntity>;
}
