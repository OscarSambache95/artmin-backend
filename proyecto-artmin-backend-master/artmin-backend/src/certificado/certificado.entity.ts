import {Column, Entity, ManyToOne, OneToMany} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {PlataformaEntity} from '../plataforma/plataforma.entity';
import {CertificadoChartFechaEntity} from '../certificado-chart-fecha/certificado-chart-fecha.entity';
import {MedidaEntity} from '../medida/medida.entity';
import {ChartEntity} from '../chart/chart.entity';

@Entity('certificado')
export class CertificadoEntity extends PrincipalEntity {
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
        type: 'bigint',
        name: 'unidades',
    })
    unidades: number;

    @ManyToOne(
        type => ChartEntity,
        chart => chart.certificadosChart,
    )
    chart: ChartEntity | number;

    @ManyToOne(
        type => MedidaEntity,
        medida => medida.certificadosMedida,
    )
    medida: MedidaEntity | number;

    @OneToMany(
        type => CertificadoChartFechaEntity,
        certificadoFechaChart => certificadoFechaChart.certificado,
    )
    chartsFechaCertificado: CertificadoChartFechaEntity[];
}
