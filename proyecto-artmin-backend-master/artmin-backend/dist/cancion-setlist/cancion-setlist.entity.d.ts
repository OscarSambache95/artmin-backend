import { PrincipalEntity } from '../principal/principal-entity';
import { CancionEntity } from '../cancion/cancion.entity';
import { PresentacionEntity } from '../presentacion/presentacion.entity';
import { SetlistEntity } from '../setlist/setlist.entity';
import { ActoTourEntity } from '../acto-tour/acto-tour.entity';
export declare class CancionSetlistEntity extends PrincipalEntity {
    posicion: number;
    cancion: CancionEntity | number;
    setlistTour: SetlistEntity | number;
    actoTour: ActoTourEntity | number;
    presentacion: PresentacionEntity | number;
}
