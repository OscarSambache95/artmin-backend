import { AlbumArtistaService } from './album-artista.service';
import { AlbumArtistaEntity } from './album-artista.entity';
import { PrincipalAbstractController } from '../principal/principal-controller';
export declare class AlbumArtistaController extends PrincipalAbstractController<AlbumArtistaEntity> {
    private readonly _albumArtistaService;
    constructor(_albumArtistaService: AlbumArtistaService);
}
