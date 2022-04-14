import { PrincipalEntity } from '../principal/principal-entity';
import { ArtistaEntity } from '../artista/artista.entity';
import { CancionEntity } from '../cancion/cancion.entity';
import { AlbumEntity } from '../album/album.entity';
import { VideoEntity } from '../video/video.entity';
import { PremioAnioEntity } from '../premio-anio/premio-anio.entity';
import { CategoriaEntity } from '../categoria/categoria.entity';
export declare class NominacionArtistaAlbumCancionVideoEntity extends PrincipalEntity {
    siGano: 0 | 1;
    artista: ArtistaEntity | number;
    cancion: CancionEntity | number;
    album: AlbumEntity | number;
    video: VideoEntity | number;
    premioAnio: PremioAnioEntity | number;
    categoria: CategoriaEntity | number;
}
