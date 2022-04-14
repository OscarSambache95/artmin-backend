import { PrincipalEntity } from '../principal/principal-entity';
import { PresentacionArtistaEntity } from '../presentacion-artista/presentacion-artista.entity';
import { PremioAnioEntity } from '../premio-anio/premio-anio.entity';
import { EventoAnioEntity } from '../evento-anio/evento-anio.entity';
import { CancionSetlistEntity } from '../cancion-setlist/cancion-setlist.entity';
export declare class PresentacionEntity extends PrincipalEntity {
    descripcion: string;
    premioAnio: PremioAnioEntity | number;
    eventoAnio: EventoAnioEntity | number;
    cancionesSetlistPresentacion: CancionSetlistEntity[];
    presentacionesArtista: PresentacionArtistaEntity[];
}
