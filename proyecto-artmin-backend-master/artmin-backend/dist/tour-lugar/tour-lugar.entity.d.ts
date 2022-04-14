import { PrincipalEntity } from '../principal/principal-entity';
import { TourEntity } from '../tour/tour.entity';
import { RecintoEntity } from '../recinto/recinto.entity';
import { LugarEntity } from '../lugar/lugar.entity';
export declare class TourLugarEntity extends PrincipalEntity {
    locacion: number;
    ticketsDisponibles: number;
    porcentaje: number;
    seCancelo: 0 | 1;
    razonCancelacion: string;
    recaudacion: number;
    fecha: string;
    hora: string;
    observacion: string;
    ticketsVendidos: number;
    anio: number;
    tour: TourEntity | number;
    recinto: RecintoEntity | number;
    lugar: LugarEntity | number;
}
