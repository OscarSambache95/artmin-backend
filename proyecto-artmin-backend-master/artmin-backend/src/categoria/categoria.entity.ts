import {Column, Entity, ManyToOne, OneToMany} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {NominacionArtistaAlbumCancionVideoEntity} from '../nominacion-artista-album-cancion-video/nominacion-artista-album-cancion-video.entity';
import {PremioEntity} from '../premio/premio.entity';

@Entity('categoria')
export class CategoriaEntity extends PrincipalEntity {
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
        type => PremioEntity,
        premio => premio.categoriasPremio,
    )
    premio: PremioEntity | number;

    @OneToMany(
        type => NominacionArtistaAlbumCancionVideoEntity,
        nominacionCategoria => nominacionCategoria.categoria,
    )
    nominacionesCategoria: NominacionArtistaAlbumCancionVideoEntity[];
}
