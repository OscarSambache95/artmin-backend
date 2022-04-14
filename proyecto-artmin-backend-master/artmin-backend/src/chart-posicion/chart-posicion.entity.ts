import {Column, Entity, ManyToOne} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {ChartAlbumCancionArtistaVideoEntity} from '../chart-album-cancion-artista-video/chart-album-cancion-artista-video.entity';

@Entity('chart-posicion')
export class ChartPosicionEntity extends PrincipalEntity {
    @Column({
        type: 'int',
        name: 'posicion',
    })
    posicion: number;

    @Column({
        type: 'int',
        name: 'numero_semana',
    })
    numeroSemana: number;

    @Column({
        type: 'varchar',
        name: 'fecha',
    })
    fecha: string;

    @ManyToOne(
        type => ChartAlbumCancionArtistaVideoEntity,
        chartAlbumCancionArtistaVideo => chartAlbumCancionArtistaVideo.posicionesChartAlbumCAncionArtistaVideo,
    )
    chartAlbumCancionArtistaVideo: ChartAlbumCancionArtistaVideoEntity | number;
}
