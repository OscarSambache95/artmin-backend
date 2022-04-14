import { PrincipalEntity } from '../principal/principal-entity';
import { AlbumEntity } from '../album/album.entity';
export declare class TipoAlbumEntity extends PrincipalEntity {
    nombre: string;
    descripcion: string;
    albumes: AlbumEntity[];
}
