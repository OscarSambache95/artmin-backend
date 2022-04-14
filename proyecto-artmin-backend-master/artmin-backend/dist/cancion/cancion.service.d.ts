import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { CancionEntity } from './cancion.entity';
import { ImagenService } from '../imagen/imagen.service';
import { GeneroArtistaAlbumCancionService } from '../genero-artista-album-cancion/genero-artista-album-cancion.service';
import { CancionArtistaService } from '../cancion-artista/cancion-artista.service';
import { AlbumCancionService } from '../album-cancion/album-cancion.service';
import { EnlaceAlbumCancionArtistaVideoEntity } from '../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.entity';
import { EnlaceAlbumCancionArtistaVideoService } from '../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.service';
export declare class CancionService extends PrincipalService<CancionEntity> {
    private readonly _cancionRepository;
    private readonly _imagenService;
    private readonly _generoArtistaAlbumCancionService;
    private readonly _cancionArtistaService;
    private readonly _albumCancionService;
    private readonly _enlaceAlbumCancionArtistaVideoService;
    constructor(_cancionRepository: Repository<CancionEntity>, _imagenService: ImagenService, _generoArtistaAlbumCancionService: GeneroArtistaAlbumCancionService, _cancionArtistaService: CancionArtistaService, _albumCancionService: AlbumCancionService, _enlaceAlbumCancionArtistaVideoService: EnlaceAlbumCancionArtistaVideoService);
    guardarCancionAlbumArtistasGenerosImagen(cancion: CancionEntity, generos: number[], artistas: Array<{
        id: number;
        esPrincipal: 0 | 1;
    }>, albumes: number[], enlaces: EnlaceAlbumCancionArtistaVideoEntity[], pathAlterno: string, imagen: any): Promise<CancionEntity>;
    editarCancion(cancion: CancionEntity, generos: number[], artistas: Array<{
        id: number;
        esPrincipal: 0 | 1;
    }>, albumes: number[], enlaces: EnlaceAlbumCancionArtistaVideoEntity[], idCancion: number, pathAlterno: string, idImagen: number, imagen?: any): Promise<CancionEntity>;
    obtenerCancionePorGeneroArtista(datosConsultaCanciones: any): Promise<[CancionEntity[], number]>;
}
