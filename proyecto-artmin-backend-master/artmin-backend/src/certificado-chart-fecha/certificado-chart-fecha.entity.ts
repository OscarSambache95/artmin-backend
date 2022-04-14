import {Column, Entity, ManyToOne, OneToMany} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {CertificadoChartEntity} from '../certificado-chart/certificado-chart.entity';
import {CertificadoEntity} from '../certificado/certificado.entity';

@Entity('certificado-chart-fecha')
export class CertificadoChartFechaEntity extends PrincipalEntity {
    @Column({
        type: 'bigint',
        name: 'cantidad',
    })
    cantidad: number;

    @Column({
        type: 'varchar',
        name: 'fecha',
    })
    fecha: string;

    @ManyToOne(
        type => CertificadoChartEntity,
        certificadoChart => certificadoChart.certificadosChartFecha,
    )
    certificadoChart: CertificadoChartEntity | number;


    @ManyToOne(
        type => CertificadoEntity,
        certificado => certificado.chartsFechaCertificado,
    )
    certificado: CertificadoEntity | number;
}
