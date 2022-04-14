import {Column, Entity, OneToMany} from 'typeorm';
import {PrincipalEntity} from '../principal/principal-entity';
import {VideoEntity} from '../video/video.entity';

@Entity('tipo-video')
export class TipoVideoEntity extends PrincipalEntity {
    @Column({
        type: 'varchar',
        name: 'nombre',
    })
    nombre: string;

    @OneToMany(
        type => VideoEntity,
        video => video.tipoVideo,
    )
    videos: VideoEntity[];
}
