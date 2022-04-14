import { PrincipalEntity } from '../principal/principal-entity';
import { ArtistaEntity } from '../artista/artista.entity';
import { PresentacionEntity } from '../presentacion/presentacion.entity';
export declare class PresentacionArtistaEntity extends PrincipalEntity {
    descripcion: string;
    artista: ArtistaEntity | number;
    presentacion: PresentacionEntity | number;
}
