import { PrincipalEntity } from '../principal/principal-entity';
import { TourLugarEntity } from '../tour-lugar/tour-lugar.entity';
export declare class RecintoEntity extends PrincipalEntity {
    nombre: string;
    lugaresTourRecinto: TourLugarEntity[];
}
