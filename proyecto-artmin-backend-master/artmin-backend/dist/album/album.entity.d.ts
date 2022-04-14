import { PrincipalEntity } from '../principal/principal-entity';
import { AlbumArtistaEntity } from '../album-artista/album-artista.entity';
import { AlbumCancionEntity } from '../album-cancion/album-cancion.entity';
import { GeneroArtistaAlbumCancionEntity } from '../genero-artista-album-cancion/genero-artista-album-cancion.entity';
import { EnlaceAlbumCancionArtistaVideoEntity } from '../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.entity';
import { ImagenEntity } from '../imagen/imagen.entity';
import { NominacionArtistaAlbumCancionVideoEntity } from '../nominacion-artista-album-cancion-video/nominacion-artista-album-cancion-video.entity';
import { ChartAlbumCancionArtistaVideoEntity } from '../chart-album-cancion-artista-video/chart-album-cancion-artista-video.entity';
import { TipoAlbumEntity } from '../tipo-album/tipo-album.entity';
import { UnidadAlbumCancionVideoEntity } from '../unidad-album-cancion-video/unidad-album-cancion-video.entity';
import { CertificadoChartEntity } from '../certificado-chart/certificado-chart.entity';
import { RecordChartEntity } from '../record-chart/record-chart.entity';
export declare class AlbumEntity extends PrincipalEntity {
    nombre: string;
    descripcion: string;
    duracionSegundos: number;
    fechaLanzamiento: string;
    anio: number;
    calificacion: number;
    tipoAlbum: TipoAlbumEntity | number;
    artistasAlbum: AlbumArtistaEntity[];
    cancionesAlbum: AlbumCancionEntity[];
    generosAlbum: GeneroArtistaAlbumCancionEntity[];
    enlacesAlbum: EnlaceAlbumCancionArtistaVideoEntity[];
    imagenesAlbum: ImagenEntity[];
    nominacionesAlbum: NominacionArtistaAlbumCancionVideoEntity[];
    chartsAlbum: ChartAlbumCancionArtistaVideoEntity[];
    unidadesAlbum: UnidadAlbumCancionVideoEntity[];
    certificadosAlbum: CertificadoChartEntity[];
    recordsAlbum: RecordChartEntity[];
}
