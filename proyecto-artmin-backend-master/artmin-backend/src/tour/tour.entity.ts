import {Column, Entity, OneToMany} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {TourLugarEntity} from '../tour-lugar/tour-lugar.entity';
import {ArtistaTourEntity} from '../artista-tour/artista-tour.entity';
import {SetlistEntity} from '../setlist/setlist.entity';
import {ImagenEntity} from '../imagen/imagen.entity';

@Entity('tour')
export class TourEntity extends PrincipalEntity {
    @Column({
        type: 'varchar',
        name: 'nombre',
    })
    nombre: string;

    @Column({
        type: 'longtext',
        name: 'descripcion',
        nullable: true,
    })
    descripcion: string;

    @Column({
        type: 'longtext',
        name: 'sinopsis',
        nullable: true,
    })
    sinopsis: string;

    @Column({
        type: 'longtext',
        name: 'observaciones',
        nullable: true,
    })
    observaciones: string;

    @Column({
        type: 'date',
        name: 'fecha_inicio',
    })
    fechaInicio: string;

    @Column({
        type: 'date',
        name: 'fecha_fin',
        nullable: true,
    })
    fechaFin: string;

    @Column({
        type: 'varchar',
        name: 'lugar_inicio',
    })
    lugarInicio: string;

    @Column({
        type: 'varchar',
        name: 'lugar_fin',
        nullable: true,
    })
    lugarFin: string;

    @Column({
        type: 'int',
        name: 'cantidad_shows',
        default: 0,
    })
    cantidadShows: number;

    @Column({
        type: 'int',
        name: 'cantidad_tickets',
        default: 0,
    })
    cantidadTickets: number;

    @Column({
        type: 'float',
        default: 0,
        name: 'recaudacion',
    })
    recaudacion: number;

    @Column({
        type: 'int',
        name: 'anio',
    })
    anio: number;

    @Column({
        type: 'enum',
        name: 'tipo',
        enum: ['gira', 'residencia'],
    })
    tipo?: 'gira' |  'residencia';

    @OneToMany(
        type => TourLugarEntity,
        tourLugar => tourLugar.tour,
    )
    lugaresTour: TourLugarEntity[];

    @OneToMany(
        type => ArtistaTourEntity,
        artistaTour => artistaTour.tour,
    )
    artistasTour: ArtistaTourEntity[];

    @OneToMany(
        type => SetlistEntity,
        setlist => setlist.tour,
    )
    setlistsTour: SetlistEntity[];

    @OneToMany(
        type => ImagenEntity,
        imagen => imagen.tour,
    )
    imagenesTour: ImagenEntity[];
}
