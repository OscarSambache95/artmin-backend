import {Column, Entity, OneToMany} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {EnlaceAlbumCancionArtistaVideoEntity} from '../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.entity';
import {ImagenEntity} from '../imagen/imagen.entity';
import {ChartAlbumCancionArtistaVideoEntity} from '../chart-album-cancion-artista-video/chart-album-cancion-artista-video.entity';
import {ChartEntity} from '../chart/chart.entity';
import {RecordEntity} from '../record/record.entity';
import {CertificadoEntity} from '../certificado/certificado.entity';

@Entity('plataforma')
export class PlataformaEntity extends PrincipalEntity {
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
        type: 'enum',
        name: 'tipo',
        enum: ['red social', 'chart'],
    })
    tipo: 'red social' | 'chart';

    @OneToMany(
        type => EnlaceAlbumCancionArtistaVideoEntity,
        enlacePlataforma => enlacePlataforma.plataforma,
    )
    enlacesPlataforma: EnlaceAlbumCancionArtistaVideoEntity[];

    @OneToMany(
        type => ImagenEntity,
        imagen => imagen.plataforma,
    )
    imagenesPlataforma: ImagenEntity[];

    @OneToMany(
        type => ChartEntity,
        chart => chart.plataforma,
    )
    chartsPlataforma: ChartEntity[];
}
