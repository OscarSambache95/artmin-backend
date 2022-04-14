import { PrincipalEntity } from '../principal/principal-entity';
import { ArtistaEntity } from '../artista/artista.entity';
import { CancionEntity } from '../cancion/cancion.entity';
import { AlbumEntity } from '../album/album.entity';
import { GeneroEntity } from '../genero/genero.entity';
export declare class GeneroArtistaAlbumCancionEntity extends PrincipalEntity {
    artista?: ArtistaEntity | number;
    cancion?: CancionEntity | number;
    album?: AlbumEntity | number;
    genero: GeneroEntity | number;
}
