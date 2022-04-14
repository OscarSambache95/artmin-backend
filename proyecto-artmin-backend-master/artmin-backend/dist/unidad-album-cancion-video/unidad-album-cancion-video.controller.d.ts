import { PrincipalAbstractController } from '../principal/principal-controller';
import { UnidadAlbumCancionVideoService } from './unidad-album-cancion-video.service';
import { UnidadAlbumCancionVideoEntity } from './unidad-album-cancion-video.entity';
export declare class UnidadAlbumCancionVideoController extends PrincipalAbstractController<UnidadAlbumCancionVideoEntity> {
    private readonly _unidadAlbumCancionVideoService;
    constructor(_unidadAlbumCancionVideoService: UnidadAlbumCancionVideoService);
    obtenerCharts(datosConsultaUnidades: any): Promise<[UnidadAlbumCancionVideoEntity[], number]>;
}
