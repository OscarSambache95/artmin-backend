import { PrincipalAbstractController } from '../principal/principal-controller';
import { CancionEntity } from './cancion.entity';
import { CancionService } from './cancion.service';
export declare class CancionController extends PrincipalAbstractController<CancionEntity> {
    private readonly _cancionService;
    constructor(_cancionService: CancionService);
    crearCancion(file: any, datosCrearCancion: any): Promise<CancionEntity>;
    editarCancion(file: any, datosEditarCancion: any): Promise<CancionEntity>;
    obtenerAlbumesPorGenero(datosConsultaCanciones: any): Promise<[CancionEntity[], number]>;
}
