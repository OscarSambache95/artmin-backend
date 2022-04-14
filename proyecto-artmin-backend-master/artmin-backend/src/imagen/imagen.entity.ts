import {Column, Entity, ManyToOne} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {ArtistaEntity} from '../artista/artista.entity';
import {CancionEntity} from '../cancion/cancion.entity';
import {AlbumEntity} from '../album/album.entity';
import {PlataformaEntity} from '../plataforma/plataforma.entity';
import {TourEntity} from '../tour/tour.entity';
import {LugarEntity} from '../lugar/lugar.entity';

@Entity('imagen')
export class ImagenEntity extends PrincipalEntity {
    @Column({
        type: 'longtext',
        name: 'url',
    })
    url: string;

    @Column({
        type: 'int',
        name: 'ancho',
        nullable: true,
    })
    ancho?: number;

    @Column({
        type: 'int',
        name: 'largo',
        nullable: true,
    })
    largo?: number;

    @Column({
        type: 'longtext',
        name: 'descripcion',
        nullable: true,
    })
    descripcion?: string;

    @Column({
        type: 'enum',
        name: 'es_principal',
        enum: [1, 0]
    })
    esPrincipal?: 0 | 1;

    @ManyToOne(
        type => ArtistaEntity,
        artista => artista.imagenesArtista,
    )
    artista?: ArtistaEntity | number;

    @ManyToOne(
        type => CancionEntity,
        cancion => cancion.imagenesCancion,
    )
    cancion?: CancionEntity | number;

    @ManyToOne(
        type => AlbumEntity,
        album => album.imagenesAlbum,
    )
    album?: AlbumEntity | number;

    @ManyToOne(
        type => PlataformaEntity,
        plataforma => plataforma.imagenesPlataforma,
    )
    plataforma?: PlataformaEntity | number;

    @ManyToOne(
        type => TourEntity,
        tour => tour.imagenesTour,
    )
    tour?: TourEntity | number;

    @ManyToOne(
        type => LugarEntity,
        lugar => lugar.imagenesLugar,
    )
    lugar?: LugarEntity | number;
}
