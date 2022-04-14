import { PrincipalEntity } from '../principal/principal-entity';
import { CancionSetlistEntity } from '../cancion-setlist/cancion-setlist.entity';
import { SetlistEntity } from '../setlist/setlist.entity';
export declare class ActoTourEntity extends PrincipalEntity {
    nombre: number;
    cancionesSetlistTour: CancionSetlistEntity[];
    setlist: SetlistEntity | number;
}
