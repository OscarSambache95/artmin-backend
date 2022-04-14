import {Column, Entity, ManyToOne, OneToMany} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {PremioEntity} from '../premio/premio.entity';
import {NominacionArtistaAlbumCancionVideoEntity} from '../nominacion-artista-album-cancion-video/nominacion-artista-album-cancion-video.entity';
import {PresentacionEntity} from '../presentacion/presentacion.entity';

@Entity('premio-anio')
export class PremioAnioEntity extends PrincipalEntity {
    @Column({
        type: 'int',
        name: 'anio',
    })
    anio: number;

    @Column({
        type: 'varchar',
        name: 'lugar',
    })
    lugar: string;

    @Column({
        type: 'varchar',
        name: 'fecha',
    })
    fecha: string;

    @ManyToOne(
        type => PremioEntity,
        premio => premio.premiosAnioPremio,
    )
    premio: PremioEntity | number;

    @OneToMany(
        type => NominacionArtistaAlbumCancionVideoEntity,
        nominacionPremioAnio => nominacionPremioAnio.premioAnio,
    )
    nominacionesPremioAnio: NominacionArtistaAlbumCancionVideoEntity[];

    @OneToMany(
        type => PresentacionEntity,
        presentacion => presentacion.premioAnio,
    )
    presentacionesPremioAnio: PresentacionEntity[];
}
