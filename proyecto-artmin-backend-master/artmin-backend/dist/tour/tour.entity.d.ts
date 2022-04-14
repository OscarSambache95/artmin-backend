import { PrincipalEntity } from '../principal/principal-entity';
import { TourLugarEntity } from '../tour-lugar/tour-lugar.entity';
import { ArtistaTourEntity } from '../artista-tour/artista-tour.entity';
import { SetlistEntity } from '../setlist/setlist.entity';
import { ImagenEntity } from '../imagen/imagen.entity';
export declare class TourEntity extends PrincipalEntity {
    nombre: string;
    descripcion: string;
    sinopsis: string;
    observaciones: string;
    fechaInicio: string;
    fechaFin: string;
    lugarInicio: string;
    lugarFin: string;
    cantidadShows: number;
    cantidadTickets: number;
    recaudacion: number;
    anio: number;
    tipo?: 'gira' | 'residencia';
    lugaresTour: TourLugarEntity[];
    artistasTour: ArtistaTourEntity[];
    setlistsTour: SetlistEntity[];
    imagenesTour: ImagenEntity[];
}
