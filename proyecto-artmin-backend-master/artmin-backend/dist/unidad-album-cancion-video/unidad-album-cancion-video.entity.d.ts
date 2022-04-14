import { PrincipalEntity } from '../principal/principal-entity';
import { MedidaEntity } from '../medida/medida.entity';
import { ChartEntity } from '../chart/chart.entity';
import { CancionEntity } from '../cancion/cancion.entity';
import { AlbumEntity } from '../album/album.entity';
import { VideoEntity } from '../video/video.entity';
export declare class UnidadAlbumCancionVideoEntity extends PrincipalEntity {
    unidadesDebut: number;
    unidadesReales: number;
    medida: MedidaEntity | number;
    chart: ChartEntity | number;
    cancion: CancionEntity | number;
    album: AlbumEntity | number;
    video: VideoEntity | number;
}
