import {Column, Entity, OneToMany} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {TourLugarEntity} from '../tour-lugar/tour-lugar.entity';

@Entity('recinto')
export class RecintoEntity extends PrincipalEntity {
    @Column({
        type: 'varchar',
        name: 'nombre',
    })
    nombre: string;

    @OneToMany(
        type => TourLugarEntity,
        tourLugar => tourLugar.recinto,
    )
    lugaresTourRecinto: TourLugarEntity[];
}
