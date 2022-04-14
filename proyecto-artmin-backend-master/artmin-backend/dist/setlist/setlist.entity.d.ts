import { PrincipalEntity } from '../principal/principal-entity';
import { CancionSetlistEntity } from '../cancion-setlist/cancion-setlist.entity';
import { TourEntity } from '../tour/tour.entity';
import { ActoTourEntity } from '../acto-tour/acto-tour.entity';
export declare class SetlistEntity extends PrincipalEntity {
    nombre: number;
    fechaInicio: string;
    fechaFin: string;
    tieneActos: 0 | 1;
    tour: TourEntity | number;
    cancionesSetlistTour: CancionSetlistEntity[];
    actosTour: ActoTourEntity[];
}
