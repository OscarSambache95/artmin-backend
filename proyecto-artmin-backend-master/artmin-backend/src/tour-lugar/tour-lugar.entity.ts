import {Column, Entity, ManyToOne} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {TourEntity} from '../tour/tour.entity';
import {RecintoEntity} from '../recinto/recinto.entity';
import {LugarEntity} from '../lugar/lugar.entity';

@Entity('tour-lugar')
export class TourLugarEntity extends PrincipalEntity {

    @Column({
        type: 'varchar',
        name: 'locacion',
    })
    locacion: number;

    @Column({
        type: 'int',
        name: 'tickets_disponibles',
    })
    ticketsDisponibles: number;

    @Column({
        type: 'int',
        name: 'porcentaje',
    })
    porcentaje: number;

    @Column({
        type: 'enum',
        name: 'se_cancelo',
        // tslint:disable-next-line:no-bitwise
        enum: [0 | 1],
        nullable: true,
    })
    seCancelo: 0 | 1;

    @Column({
        type: 'varchar',
        name: 'razon_cancelacion',
        nullable: true,
    })
    razonCancelacion: string;

    @Column({
        type: 'float',
        default: 0,
        name: 'recaudacion',
    })
    recaudacion: number;

    @Column({
        type: 'varchar',
        name: 'fecha',
    })
    fecha: string;

    @Column({
        type: 'time',
        name: 'hora',
    })
    hora: string;

    @Column({
        type: 'longtext',
        name: 'observacion',
        nullable: true,
    })
    observacion: string;

    @Column({
        type: 'int',
        name: 'tickets_vendidos',
    })
    ticketsVendidos: number;

    @Column({
        type: 'int',
        name: 'anio',
    })
    anio: number;

    @ManyToOne(
        type => TourEntity,
        tour => tour.lugaresTour,
    )
    tour: TourEntity | number;

    @ManyToOne(
        type => RecintoEntity,
        recinto => recinto.lugaresTourRecinto,
    )
    recinto: RecintoEntity | number;

    @ManyToOne(
        type => LugarEntity,
        lugar => lugar.touresLugar,
    )
    lugar: LugarEntity | number;
}
