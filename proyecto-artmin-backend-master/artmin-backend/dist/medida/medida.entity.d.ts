import { PrincipalEntity } from '../principal/principal-entity';
import { RecordEntity } from '../record/record.entity';
import { UnidadAlbumCancionVideoEntity } from '../unidad-album-cancion-video/unidad-album-cancion-video.entity';
import { CertificadoEntity } from '../certificado/certificado.entity';
import { RecordChartEntity } from '../record-chart/record-chart.entity';
export declare class MedidaEntity extends PrincipalEntity {
    nombre: string;
    descripcion: string;
    recordsMedida: RecordEntity[];
    recordsChartMedida: RecordChartEntity[];
    unidadesChartMedida: UnidadAlbumCancionVideoEntity[];
    certificadosMedida: CertificadoEntity[];
}
