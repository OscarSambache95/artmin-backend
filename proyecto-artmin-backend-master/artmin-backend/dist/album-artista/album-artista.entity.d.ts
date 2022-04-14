import { PrincipalEntity } from '../principal/principal-entity';
import { ArtistaEntity } from '../artista/artista.entity';
import { AlbumEntity } from '../album/album.entity';
export declare class AlbumArtistaEntity extends PrincipalEntity {
    orden?: number;
    artista: ArtistaEntity | number;
    album: AlbumEntity | number;
}
