import { PrincipalAbstractController } from '../principal/principal-controller';
import { ChartAlbumCancionArtistaVideoEntity } from './chart-album-cancion-artista-video.entity';
import { ChartAlbumCancionArtistaVideoService } from './chart-album-cancion-artista-video.service';
export declare class ChartAlbumCancionArtistaVideoController extends PrincipalAbstractController<ChartAlbumCancionArtistaVideoEntity> {
    private readonly _chartAlbumCancionArtistaVideoService;
    constructor(_chartAlbumCancionArtistaVideoService: ChartAlbumCancionArtistaVideoService);
    obtenerCharts(datosConsultaCharts: any): Promise<[ChartAlbumCancionArtistaVideoEntity[], number]>;
}
