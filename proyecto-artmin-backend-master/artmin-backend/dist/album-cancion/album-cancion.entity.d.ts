import { PrincipalEntity } from '../principal/principal-entity';
import { CancionEntity } from '../cancion/cancion.entity';
import { AlbumEntity } from '../album/album.entity';
export declare class AlbumCancionEntity extends PrincipalEntity {
    posicion: number;
    cancion: CancionEntity | number;
    album: AlbumEntity | number;
}
