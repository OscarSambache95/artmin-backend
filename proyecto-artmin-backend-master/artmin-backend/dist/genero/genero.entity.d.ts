import { PrincipalEntity } from '../principal/principal-entity';
import { GeneroArtistaAlbumCancionEntity } from '../genero-artista-album-cancion/genero-artista-album-cancion.entity';
export declare class GeneroEntity extends PrincipalEntity {
    nombre: string;
    descripcion: string;
    generosArtistaAlbumCancion: GeneroArtistaAlbumCancionEntity[];
}
