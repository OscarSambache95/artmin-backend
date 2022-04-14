import { PrincipalEntity } from '../principal/principal-entity';
import { CancionEntity } from '../cancion/cancion.entity';
import { AlbumEntity } from '../album/album.entity';
import { VideoEntity } from '../video/video.entity';
import { ChartPosicionEntity } from '../chart-posicion/chart-posicion.entity';
import { ChartEntity } from '../chart/chart.entity';
export declare class ChartAlbumCancionArtistaVideoEntity extends PrincipalEntity {
    fechaDebut: string;
    fechaPeak: string;
    anio: number;
    peak: number;
    numeroSemanas: number;
    numeroDias: number;
    numeroSemanasPeak: number;
    numeroDiasPeak: number;
    numeroSemanasTop5: number;
    numeroDiasTop5: number;
    numeroSemanasTop10: number;
    numeroDiasTop10: number;
    posicionDebut: number;
    descripcion: string;
    cancion: CancionEntity | number;
    album: AlbumEntity | number;
    video: VideoEntity | number;
    chart: ChartEntity | number;
    posicionesChartAlbumCAncionArtistaVideo: ChartPosicionEntity[];
}
