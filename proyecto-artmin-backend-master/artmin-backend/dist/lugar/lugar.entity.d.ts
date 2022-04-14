import { PrincipalEntity } from '../principal/principal-entity';
import { TourLugarEntity } from '../tour-lugar/tour-lugar.entity';
import { ImagenEntity } from '../imagen/imagen.entity';
import { ChartEntity } from '../chart/chart.entity';
export declare class LugarEntity extends PrincipalEntity {
    nombre: string;
    tipo: string;
    lugarPadre: LugarEntity | number;
    lugaresHijos: LugarEntity[];
    touresLugar: TourLugarEntity[];
    imagenesLugar: ImagenEntity[];
    chartsLugar: ChartEntity[];
}
