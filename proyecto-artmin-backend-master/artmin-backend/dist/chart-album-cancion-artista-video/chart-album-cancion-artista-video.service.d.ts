import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { ChartAlbumCancionArtistaVideoEntity } from './chart-album-cancion-artista-video.entity';
export declare class ChartAlbumCancionArtistaVideoService extends PrincipalService<ChartAlbumCancionArtistaVideoEntity> {
    private readonly _chartAlbumCancionArtistaVideoRepository;
    constructor(_chartAlbumCancionArtistaVideoRepository: Repository<ChartAlbumCancionArtistaVideoEntity>);
    obtenerChartsCancionesAlbumsArtistasVideos(datosConsultaChart: any): Promise<[ChartAlbumCancionArtistaVideoEntity[], number]>;
}
