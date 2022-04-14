import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { UnidadAlbumCancionVideoEntity } from './unidad-album-cancion-video.entity';
export declare class UnidadAlbumCancionVideoService extends PrincipalService<UnidadAlbumCancionVideoEntity> {
    private readonly _unidadAlbumCancionVideoRepository;
    constructor(_unidadAlbumCancionVideoRepository: Repository<UnidadAlbumCancionVideoEntity>);
    obtenerUnidadesCancionesAlbumsVideos(datosConsultaUnidades: any): Promise<[UnidadAlbumCancionVideoEntity[], number]>;
}
