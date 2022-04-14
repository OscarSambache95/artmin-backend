import { PrincipalEntity } from '../principal/principal-entity';
import { ChartAlbumCancionArtistaVideoEntity } from '../chart-album-cancion-artista-video/chart-album-cancion-artista-video.entity';
export declare class ChartPosicionEntity extends PrincipalEntity {
    posicion: number;
    numeroSemana: number;
    fecha: string;
    chartAlbumCancionArtistaVideo: ChartAlbumCancionArtistaVideoEntity | number;
}
