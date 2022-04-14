import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { ImagenEntity } from './imagen.entity';
export declare class ImagenService extends PrincipalService<ImagenEntity> {
    private readonly _imagenRepository;
    constructor(_imagenRepository: Repository<ImagenEntity>);
    pathCarpetaImagenes: string;
    guardarImagen(imagen: any, entidad: string, esPrincipal: 0 | 1, idEntidad: number, pathAlterno: string, idImagen?: number): Promise<ImagenEntity>;
    eliminarArchivo(pathImagen: string): void;
}
