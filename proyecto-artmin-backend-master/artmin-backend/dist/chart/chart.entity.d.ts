import { PrincipalEntity } from '../principal/principal-entity';
import { PlataformaEntity } from '../plataforma/plataforma.entity';
import { ChartAlbumCancionArtistaVideoEntity } from '../chart-album-cancion-artista-video/chart-album-cancion-artista-video.entity';
import { LugarEntity } from '../lugar/lugar.entity';
import { UnidadAlbumCancionVideoEntity } from '../unidad-album-cancion-video/unidad-album-cancion-video.entity';
import { RecordChartEntity } from '../record-chart/record-chart.entity';
import { CertificadoChartEntity } from '../certificado-chart/certificado-chart.entity';
import { CertificadoEntity } from '../certificado/certificado.entity';
import { RecordEntity } from '../record/record.entity';
export declare class ChartEntity extends PrincipalEntity {
    nombre: string;
    descripcion: string;
    tipo: string;
    plataforma: PlataformaEntity | number;
    albumesCancionesVideosArtistasChart: ChartAlbumCancionArtistaVideoEntity[];
    unidadesAlbumCancionVideoArtista: UnidadAlbumCancionVideoEntity[];
    lugar: LugarEntity | number;
    certificadosChartAlbumCAncionArtistaVideo: CertificadoChartEntity[];
    certificadosChart: CertificadoEntity[];
    recordsChart: RecordEntity[];
    recordsChartAlbumCancionArtistaVideo: RecordChartEntity[];
}
