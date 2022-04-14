import { PrincipalEntity } from '../principal/principal-entity';
import { ArtistaEntity } from '../artista/artista.entity';
import { CancionEntity } from '../cancion/cancion.entity';
import { AlbumEntity } from '../album/album.entity';
import { VideoEntity } from '../video/video.entity';
import { PlataformaEntity } from '../plataforma/plataforma.entity';
export declare class EnlaceAlbumCancionArtistaVideoEntity extends PrincipalEntity {
    url: string;
    seguidores: number;
    artista: ArtistaEntity | number;
    cancion: CancionEntity | number;
    album: AlbumEntity | number;
    video: VideoEntity | number;
    plataforma: PlataformaEntity | number;
}
