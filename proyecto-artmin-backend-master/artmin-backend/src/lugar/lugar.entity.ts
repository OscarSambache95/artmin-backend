import {Column, Entity, OneToMany, Tree, TreeChildren, TreeParent} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {TourLugarEntity} from '../tour-lugar/tour-lugar.entity';
import {ImagenEntity} from '../imagen/imagen.entity';
import {ChartEntity} from '../chart/chart.entity';

@Tree('nested-set')

@Entity('lugar')
export class LugarEntity extends PrincipalEntity {
    @Column({
        type: 'varchar',
        name: 'nombre',
    })
    nombre: string;

    @Column({
        type: 'enum',
        name: 'tipo',
        enum: ['ciudad', 'pais', 'continente', 'global']
    })
    tipo: string;

    @TreeParent()
    lugarPadre: LugarEntity | number;

    @TreeChildren()
    lugaresHijos: LugarEntity[];
    
    
    @OneToMany(
        type => TourLugarEntity,
        tourLugar => tourLugar.lugar,
    )
    touresLugar: TourLugarEntity[];

    @OneToMany(
        type => ImagenEntity,
        imagen => imagen.lugar,
    )
    imagenesLugar: ImagenEntity[];

    @OneToMany(
        type => ChartEntity,
        chart => chart.lugar,
    )
    chartsLugar: ChartEntity[];
    
}
