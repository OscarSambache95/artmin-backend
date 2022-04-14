import { Repository } from 'typeorm';
import { AlbumEntity } from './album.entity';
import { PrincipalService } from '../principal/principal-service';
import { ImagenService } from '../imagen/imagen.service';
import { GeneroArtistaAlbumCancionService } from '../genero-artista-album-cancion/genero-artista-album-cancion.service';
import { AlbumArtistaService } from '../album-artista/album-artista.service';
export declare class AlbumService extends PrincipalService<AlbumEntity> {
    private readonly _albumRepository;
    private readonly _imagenService;
    private readonly _generoArtistaAlbumCancionService;
    private readonly _albumArtistaService;
    constructor(_albumRepository: Repository<AlbumEntity>, _imagenService: ImagenService, _generoArtistaAlbumCancionService: GeneroArtistaAlbumCancionService, _albumArtistaService: AlbumArtistaService);
    guardarAlbumArtistasGenerosImagen(album: AlbumEntity, generos: number[], artistas: number[], imagen?: any): Promise<AlbumEntity>;
    editarAlbumArtistaImagenGeneros(album: AlbumEntity, generos: number[], artistas: number[], idAlbum: number, idImagen: number, imagen?: any): Promise<AlbumEntity>;
    obtenerAlbumesPorGenero(datosConsultaAlbumGeneros: any): Promise<[AlbumEntity[], number]>;
}
