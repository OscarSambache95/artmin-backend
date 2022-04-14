import {Column, Entity, ManyToOne} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {ArtistaEntity} from '../artista/artista.entity';
import {CancionEntity} from '../cancion/cancion.entity';

@Entity('cancion-artista')
export class CancionArtistaEntity extends PrincipalEntity {
    @Column({
        type: 'enum',
        name: 'es_artista_principal',
        enum: [0 | 1],
    })
    esArtistaPrincipal: 0 | 1;

    @ManyToOne(
        type => ArtistaEntity,
        artista => artista.cancionesArtista,
    )
    artista: ArtistaEntity | number;

    @ManyToOne(
        type => CancionEntity,
        cancion => cancion.artistasCancion,
    )
    cancion: CancionEntity | number;
}
