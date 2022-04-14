import { PrincipalEntity } from '../principal/principal-entity';
import { VideoEntity } from '../video/video.entity';
export declare class TipoVideoEntity extends PrincipalEntity {
    nombre: string;
    videos: VideoEntity[];
}
