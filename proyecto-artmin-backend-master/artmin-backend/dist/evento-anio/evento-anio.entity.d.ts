import { PrincipalEntity } from '../principal/principal-entity';
import { EventoEntity } from '../evento/evento.entity';
import { PresentacionEntity } from '../presentacion/presentacion.entity';
export declare class EventoAnioEntity extends PrincipalEntity {
    anio: number;
    lugar: string;
    fecha: string;
    evento: EventoEntity | number;
    presentacionesEventoAnio: PresentacionEntity[];
}
