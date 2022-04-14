import { PrincipalEntity } from '../principal/principal-entity';
import { EventoEntity } from '../evento/evento.entity';
export declare class TipoEventoEntity extends PrincipalEntity {
    nombre: string;
    descripcion: string;
    eventosTipoEvento: EventoEntity[];
}
