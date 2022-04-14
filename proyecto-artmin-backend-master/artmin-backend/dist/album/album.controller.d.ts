import { AlbumService } from './album.service';
import { AlbumEntity } from './album.entity';
import { PrincipalAbstractController } from '../principal/principal-controller';
export declare class AlbumController extends PrincipalAbstractController<AlbumEntity> {
    private readonly _albumService;
    constructor(_albumService: AlbumService);
    crearAlbum(file: any, datosAlbumGeneros: any): Promise<AlbumEntity>;
    editarArtista(file: any, datosAlbumGenerosImagenArtistas: any): Promise<AlbumEntity>;
    obtenerAlbumesPorGenero(datosAlbumsPorGenero: any): Promise<[AlbumEntity[], number]>;
}
