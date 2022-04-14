import {Column, Entity, ManyToOne, OneToMany} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {PlataformaEntity} from '../plataforma/plataforma.entity';
import {MedidaEntity} from '../medida/medida.entity';
import {RecordChartEntity} from '../record-chart/record-chart.entity';
import {ChartEntity} from '../chart/chart.entity';

@Entity('record')
export class RecordEntity extends PrincipalEntity {
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

    @ManyToOne(
        type => ChartEntity,
        chart => chart.recordsChart,
    )
    chart: ChartEntity | number;

    @ManyToOne(
        type => MedidaEntity,
        medida => medida.recordsMedida,
    )
    medida: MedidaEntity | number;

    @OneToMany(
        type => RecordChartEntity,
        recordChart => recordChart.record,
    )
    recordsChartCancionAlbumVideo: RecordChartEntity[];
}
