import { PrincipalEntity } from '../principal/principal-entity';
import { TipoEventoEntity } from '../tipo-evento/tipo-evento.entity';
import { EventoAnioEntity } from '../evento-anio/evento-anio.entity';
export declare class EventoEntity extends PrincipalEntity {
    nombre: string;
    descripcion: string;
    tipoEvento: TipoEventoEntity | number;
    eventosAnioEvento: EventoAnioEntity[];
}
