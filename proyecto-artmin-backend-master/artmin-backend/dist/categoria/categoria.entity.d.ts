import { PrincipalEntity } from '../principal/principal-entity';
import { NominacionArtistaAlbumCancionVideoEntity } from '../nominacion-artista-album-cancion-video/nominacion-artista-album-cancion-video.entity';
import { PremioEntity } from '../premio/premio.entity';
export declare class CategoriaEntity extends PrincipalEntity {
    nombre: string;
    descripcion: string;
    premio: PremioEntity | number;
    nominacionesCategoria: NominacionArtistaAlbumCancionVideoEntity[];
}
