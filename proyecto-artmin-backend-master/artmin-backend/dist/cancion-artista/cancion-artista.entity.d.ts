import { PrincipalEntity } from '../principal/principal-entity';
import { ArtistaEntity } from '../artista/artista.entity';
import { CancionEntity } from '../cancion/cancion.entity';
export declare class CancionArtistaEntity extends PrincipalEntity {
    esArtistaPrincipal: 0 | 1;
    artista: ArtistaEntity | number;
    cancion: CancionEntity | number;
}
