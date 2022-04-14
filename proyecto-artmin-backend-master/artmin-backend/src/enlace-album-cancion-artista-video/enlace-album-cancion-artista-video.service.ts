import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {EnlaceAlbumCancionArtistaVideoEntity} from './enlace-album-cancion-artista-video.entity';

@Injectable()
export class EnlaceAlbumCancionArtistaVideoService extends PrincipalService<EnlaceAlbumCancionArtistaVideoEntity> {
    constructor(
        @InjectRepository(EnlaceAlbumCancionArtistaVideoEntity)
        private readonly _enlaceAlbumCancionArtistaVideoRepository: Repository<EnlaceAlbumCancionArtistaVideoEntity>,
    ) {
        super(_enlaceAlbumCancionArtistaVideoRepository, EnlaceAlbumCancionArtistaVideoEntity);
    }


    async guardarEnlaceArtistaAlbumCancionVideo(
        entidad: string,
        idEntidad: number,
        enlaces: EnlaceAlbumCancionArtistaVideoEntity[]
    ) {
        const respuestaEnlacessAntesEdicion = await this.find(
            {
                where: {
                    [entidad]: idEntidad
                }
            }
        );
        const enlacesArtistaAlbumCancionVideoAntesEdicion = respuestaEnlacessAntesEdicion[0] as EnlaceAlbumCancionArtistaVideoEntity[];
        const enlacesACrearEditar = enlaces
            .map(
                (enlace) => {
                    enlace[entidad] = idEntidad;
                    return enlace;
                }
            );
        await this.createMany(enlacesACrearEditar);
        const idEnlaceAEliminar = enlacesArtistaAlbumCancionVideoAntesEdicion
            .map(
                (enlace) => {
                    const enlaceCreado = enlaces.find(enlaceAntesEdicion => {
                        return enlace.id === enlaceAntesEdicion.id;
                    });
                    if (!enlaceCreado) {
                        return enlace.id;
                    }
                }
            )
            .filter(idEnlaceAEliminar => idEnlaceAEliminar);
        if (idEnlaceAEliminar && idEnlaceAEliminar.length) {
            await this.delete(idEnlaceAEliminar);
        }
    }
}
