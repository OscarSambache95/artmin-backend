import { PrincipalEntity } from '../principal/principal-entity';
import { CancionEntity } from '../cancion/cancion.entity';
import { TipoVideoEntity } from '../tipo-video/tipo-video.entity';
import { EnlaceAlbumCancionArtistaVideoEntity } from '../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.entity';
import { NominacionArtistaAlbumCancionVideoEntity } from '../nominacion-artista-album-cancion-video/nominacion-artista-album-cancion-video.entity';
import { ChartAlbumCancionArtistaVideoEntity } from '../chart-album-cancion-artista-video/chart-album-cancion-artista-video.entity';
import { UnidadAlbumCancionVideoEntity } from '../unidad-album-cancion-video/unidad-album-cancion-video.entity';
import { CertificadoChartEntity } from '../certificado-chart/certificado-chart.entity';
import { RecordChartEntity } from '../record-chart/record-chart.entity';
export declare class VideoEntity extends PrincipalEntity {
    nombre: string;
    descripcion: string;
    duracionSegundos: number;
    fechaLanzamiento: string;
    anio: number;
    cancion: CancionEntity | number;
    tipoVideo: TipoVideoEntity | number;
    enlacesVideo: EnlaceAlbumCancionArtistaVideoEntity[];
    nominacionesVideo: NominacionArtistaAlbumCancionVideoEntity[];
    chartsVideo: ChartAlbumCancionArtistaVideoEntity[];
    unidadesVideo: UnidadAlbumCancionVideoEntity[];
    certificadosVideo: CertificadoChartEntity[];
    recordsVideo: RecordChartEntity[];
}
