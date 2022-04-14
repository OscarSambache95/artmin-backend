import { PrincipalAbstractController } from '../principal/principal-controller';
import { ArtistaEntity } from './artista.entity';
import { ArtistaService } from './artista.service';
export declare class ArtistaController extends PrincipalAbstractController<ArtistaEntity> {
    private readonly _artistaService;
    constructor(_artistaService: ArtistaService);
    crearArtista(file: any, datosArtistaGeneros: any): Promise<ArtistaEntity>;
    editarArtista(file: any, datosArtistaGeneros: any): Promise<ArtistaEntity>;
    obtenerArtistasPorGenero(datosArtistasPorGenero: any): Promise<[ArtistaEntity[], number]>;
}
