import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { VideoEntity } from './video.entity';
import { EnlaceAlbumCancionArtistaVideoEntity } from '../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.entity';
import { EnlaceAlbumCancionArtistaVideoService } from '../enlace-album-cancion-artista-video/enlace-album-cancion-artista-video.service';
export declare class VideoService extends PrincipalService<VideoEntity> {
    private readonly _videoRepository;
    private readonly _enlaceAlbumCancionArtistaVideoService;
    constructor(_videoRepository: Repository<VideoEntity>, _enlaceAlbumCancionArtistaVideoService: EnlaceAlbumCancionArtistaVideoService);
    guardarVideo(video: VideoEntity, enlaces: EnlaceAlbumCancionArtistaVideoEntity[]): Promise<VideoEntity>;
    editarVideo(video: VideoEntity, enlaces: EnlaceAlbumCancionArtistaVideoEntity[], idVideo: number): Promise<VideoEntity>;
    obtenerVideos(datosConsultaVideo: any): Promise<[VideoEntity[], number]>;
}
