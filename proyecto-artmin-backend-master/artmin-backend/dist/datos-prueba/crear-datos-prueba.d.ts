import { PrincipalService } from '../principal/principal-service';
export declare function crearDatos(servicio: PrincipalService<any> | any, rutaDatos: string): Promise<{
    data: any;
    mensaje: string;
}>;
