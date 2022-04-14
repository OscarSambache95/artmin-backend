import { PrincipalEntity } from '../principal/principal-entity';
import { CancionEntity } from '../cancion/cancion.entity';
export declare class TipoCancionEntity extends PrincipalEntity {
    nombre: string;
    descripcion: string;
    canciones: CancionEntity[];
}
