import { PrincipalAbstractController } from '../principal/principal-controller';
import { TourEntity } from './tour.entity';
import { TourService } from './tour.service';
export declare class TourController extends PrincipalAbstractController<TourEntity> {
    private readonly _tourService;
    constructor(_tourService: TourService);
    obtenerTourPorArtistasTipo(datosConsultaTours: any): Promise<[TourEntity[], number]>;
    crearCancion(file: any, tourJsonString: any): Promise<any>;
}
