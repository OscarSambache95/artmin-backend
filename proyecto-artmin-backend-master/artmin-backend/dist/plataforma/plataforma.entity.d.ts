import { PrincipalEntity } from '../principal/principal-entity';
import { EnlaceAlbumCancionArtistaVideoEntity } from '../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.entity';
import { ImagenEntity } from '../imagen/imagen.entity';
import { ChartEntity } from '../chart/chart.entity';
export declare class PlataformaEntity extends PrincipalEntity {
    nombre: string;
    descripcion: string;
    tipo: 'red social' | 'chart';
    enlacesPlataforma: EnlaceAlbumCancionArtistaVideoEntity[];
    imagenesPlataforma: ImagenEntity[];
    chartsPlataforma: ChartEntity[];
}
