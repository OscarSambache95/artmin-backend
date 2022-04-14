import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { ArtistaEntity } from './artista.entity';
import { ImagenService } from '../imagen/imagen.service';
import { GeneroArtistaAlbumCancionService } from '../genero-artista-album-cancion/genero-artista-album-cancion.service';
import { EnlaceAlbumCancionArtistaVideoEntity } from '../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.entity';
import { EnlaceAlbumCancionArtistaVideoService } from '../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.service';
export declare class ArtistaService extends PrincipalService<ArtistaEntity> {
    private readonly _artistaRepository;
    private readonly _imagenService;
    private readonly _generoArtistaAlbumCancionService;
    private readonly _enlaceAlbumCancionArtistaVideoService;
    constructor(_artistaRepository: Repository<ArtistaEntity>, _imagenService: ImagenService, _generoArtistaAlbumCancionService: GeneroArtistaAlbumCancionService, _enlaceAlbumCancionArtistaVideoService: EnlaceAlbumCancionArtistaVideoService);
    guardarArtistaImagen(artista: ArtistaEntity, generos: number[], enlaces: EnlaceAlbumCancionArtistaVideoEntity[], imagen?: any): Promise<ArtistaEntity>;
    editarArtistaImagen(artista: ArtistaEntity, generos: number[], enlaces: EnlaceAlbumCancionArtistaVideoEntity[], idArtista: number, idImagen: number, imagen?: any): Promise<ArtistaEntity>;
    obtenerArtistasPorGenero(datosConsultaArtistaGeneros: any): Promise<[ArtistaEntity[], number]>;
}
