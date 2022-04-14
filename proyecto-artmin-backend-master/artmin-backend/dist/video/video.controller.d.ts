import { PrincipalAbstractController } from '../principal/principal-controller';
import { VideoEntity } from './video.entity';
import { VideoService } from './video.service';
export declare class VideoController extends PrincipalAbstractController<VideoEntity> {
    private readonly _videoService;
    constructor(_videoService: VideoService);
    crearVideo(datosCrearVideo: any): Promise<VideoEntity>;
    editarVideo(datosCrearVideo: any): Promise<VideoEntity>;
    obtenervideos(datosConsultaVideos: any): Promise<[VideoEntity[], number]>;
}
