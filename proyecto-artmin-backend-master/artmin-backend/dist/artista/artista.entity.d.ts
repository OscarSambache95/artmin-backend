import { PrincipalEntity } from '../principal/principal-entity';
import { CancionArtistaEntity } from '../cancion-artista/cancion-artista.entity';
import { AlbumArtistaEntity } from '../album-artista/album-artista.entity';
import { GeneroArtistaAlbumCancionEntity } from '../genero-artista-album-cancion/genero-artista-album-cancion.entity';
import { PresentacionArtistaEntity } from '../presentacion-artista/presentacion-artista.entity';
import { ImagenEntity } from '../imagen/imagen.entity';
import { NominacionArtistaAlbumCancionVideoEntity } from '../nominacion-artista-album-cancion-video/nominacion-artista-album-cancion-video.entity';
import { ArtistaTourEntity } from '../artista-tour/artista-tour.entity';
export declare class ArtistaEntity extends PrincipalEntity {
    nombre: string;
    descripcion: string;
    anioDebut: number;
    fechaNacimiento: string;
    cancionesArtista: CancionArtistaEntity[];
    albumesArtista: AlbumArtistaEntity[];
    generosArtista: GeneroArtistaAlbumCancionEntity[];
    presentacionesArtista: PresentacionArtistaEntity[];
    imagenesArtista: ImagenEntity[];
    nominacionesArtista: NominacionArtistaAlbumCancionVideoEntity[];
    toursArtista: ArtistaTourEntity[];
    enlacesArtista: CancionArtistaEntity[];
}
