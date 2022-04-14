import { PrincipalAbstractController } from '../principal/principal-controller';
import { AlbumCancionEntity } from './album-cancion.entity';
import { AlbumCancionService } from './album-cancion.service';
export declare class AlbumCancionController extends PrincipalAbstractController<AlbumCancionEntity> {
    private readonly _albumCancionService;
    constructor(_albumCancionService: AlbumCancionService);
    guardarCancionesAlbumCancion(idAlbum: any, idsCanciones: any): Promise<[AlbumCancionEntity[], number]>;
}
