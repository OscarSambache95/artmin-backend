import {Column, Entity, OneToMany} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {GeneroArtistaAlbumCancionEntity} from '../genero-artista-album-cancion/genero-artista-album-cancion.entity';

@Entity('genero')
export class GeneroEntity extends PrincipalEntity {
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
        type => GeneroArtistaAlbumCancionEntity,
        generoArtistaAlbumCancion => generoArtistaAlbumCancion.genero,
    )
    generosArtistaAlbumCancion: GeneroArtistaAlbumCancionEntity[];
}
