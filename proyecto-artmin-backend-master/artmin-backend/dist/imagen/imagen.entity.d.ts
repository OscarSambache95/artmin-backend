import { PrincipalEntity } from '../principal/principal-entity';
import { ArtistaEntity } from '../artista/artista.entity';
import { CancionEntity } from '../cancion/cancion.entity';
import { AlbumEntity } from '../album/album.entity';
import { PlataformaEntity } from '../plataforma/plataforma.entity';
import { TourEntity } from '../tour/tour.entity';
import { LugarEntity } from '../lugar/lugar.entity';
export declare class ImagenEntity extends PrincipalEntity {
    url: string;
    ancho?: number;
    largo?: number;
    descripcion?: string;
    esPrincipal?: 0 | 1;
    artista?: ArtistaEntity | number;
    cancion?: CancionEntity | number;
    album?: AlbumEntity | number;
    plataforma?: PlataformaEntity | number;
    tour?: TourEntity | number;
    lugar?: LugarEntity | number;
}
