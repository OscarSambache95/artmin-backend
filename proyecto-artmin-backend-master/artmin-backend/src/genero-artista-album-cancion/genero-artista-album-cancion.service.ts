import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {GeneroArtistaAlbumCancionEntity} from './genero-artista-album-cancion.entity';
import {GeneroEntity} from '../genero/genero.entity';

@Injectable()
export class GeneroArtistaAlbumCancionService extends PrincipalService<GeneroArtistaAlbumCancionEntity> {
    constructor(
        @InjectRepository(GeneroArtistaAlbumCancionEntity)
        private readonly _generoArtistaAlbumCancionRepository: Repository<GeneroArtistaAlbumCancionEntity>,
    ) {
        super(_generoArtistaAlbumCancionRepository, GeneroArtistaAlbumCancionEntity);
    }

    async guardarGenerosPorArtistaAlbumCancion(
        entidad: string,
        idEntidad: number,
        idGeneros: number[]
    ) {
        const respuestaGenerosAntesEdicion = await this.find(
            {
                where: {
                    [entidad]: idEntidad
                },
                relations: [
                    entidad,
                    'genero'
                ]
            }
        );
        const generosArtistaAlbumCancionAntesEdicion = respuestaGenerosAntesEdicion[0] as GeneroArtistaAlbumCancionEntity[];
        const generosArtistaACrear = idGeneros
            .map(
                (genero) => {
                    const generoArtistaAlbumCancionCreado = generosArtistaAlbumCancionAntesEdicion.find(generoArtistaAlbumCancion => {
                        return (generoArtistaAlbumCancion.genero as GeneroEntity).id === genero;
                    });
                    if (!generoArtistaAlbumCancionCreado) {
                        return {
                            genero: genero,
                            [entidad]: idEntidad
                        }
                    }
                }
            )
            .filter(generoArtistaAlbumCancionFiltrados => generoArtistaAlbumCancionFiltrados);
        await this.createMany(generosArtistaACrear)
        const idGenerosArtistaAEliminar = generosArtistaAlbumCancionAntesEdicion
            .map(
                (generoArtistaAlbumCancion) => {
                    const generoACrear = idGeneros.find(idGenero => {
                        return idGenero === (generoArtistaAlbumCancion.genero as GeneroEntity).id;
                    });
                    if (!generoACrear) {
                        return generoArtistaAlbumCancion.id;
                    }
                }
            )
            .filter(idGenerosArtistaAlbumCancionAEliminar => idGenerosArtistaAlbumCancionAEliminar);
        if (idGenerosArtistaAEliminar && idGenerosArtistaAEliminar.length) {
            await this.delete(idGenerosArtistaAEliminar);
        }
    }
}
