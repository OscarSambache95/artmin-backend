import {Column, Entity, OneToMany} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {RecordEntity} from '../record/record.entity';
import {UnidadAlbumCancionVideoEntity} from '../unidad-album-cancion-video/unidad-album-cancion-video.entity';
import {CertificadoEntity} from '../certificado/certificado.entity';
import {RecordChartEntity} from '../record-chart/record-chart.entity';

@Entity('medida')
export class MedidaEntity extends PrincipalEntity {
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

    @OneToMany(
        type => RecordEntity,
        record => record.medida,
    )
    recordsMedida: RecordEntity[];

    @OneToMany(
        type => RecordChartEntity,
        record => record.medida,
    )
    recordsChartMedida: RecordChartEntity[];

    @OneToMany(
        type => UnidadAlbumCancionVideoEntity,
        unidadAlbumCancionVideoChart => unidadAlbumCancionVideoChart.medida,
    )
    unidadesChartMedida: UnidadAlbumCancionVideoEntity[];

    @OneToMany(
        type => CertificadoEntity,
        certificado => certificado.medida,
    )
    certificadosMedida: CertificadoEntity[];
}
