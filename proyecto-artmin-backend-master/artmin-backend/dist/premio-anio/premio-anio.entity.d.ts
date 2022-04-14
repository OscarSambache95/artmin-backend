import { PrincipalEntity } from '../principal/principal-entity';
import { PremioEntity } from '../premio/premio.entity';
import { NominacionArtistaAlbumCancionVideoEntity } from '../nominacion-artista-album-cancion-video/nominacion-artista-album-cancion-video.entity';
import { PresentacionEntity } from '../presentacion/presentacion.entity';
export declare class PremioAnioEntity extends PrincipalEntity {
    anio: number;
    lugar: string;
    fecha: string;
    premio: PremioEntity | number;
    nominacionesPremioAnio: NominacionArtistaAlbumCancionVideoEntity[];
    presentacionesPremioAnio: PresentacionEntity[];
}
