import { PrincipalEntity } from '../principal/principal-entity';
import { PremioAnioEntity } from '../premio-anio/premio-anio.entity';
import { CategoriaEntity } from '../categoria/categoria.entity';
export declare class PremioEntity extends PrincipalEntity {
    nombre: string;
    descripcion: string;
    premiosAnioPremio: PremioAnioEntity[];
    categoriasPremio: CategoriaEntity[];
}
