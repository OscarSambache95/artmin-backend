import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {ArtistaEntity} from '../artista/artista.entity';
import {CancionArtistaEntity} from './cancion-artista.entity';

@Injectable()
export class CancionArtistaService extends PrincipalService<CancionArtistaEntity> {
    constructor(
        @InjectRepository(CancionArtistaEntity)
        private readonly _cancionArtistaRepository: Repository<CancionArtistaEntity>,
    ) {
        super(_cancionArtistaRepository, CancionArtistaEntity);
    }

    async guardarArtistasCancion(
        idCancion: number,
        idsArtistas: Array<{id: number, esPrincipal: 0 | 1}>
    ) {
        const respuestaCancionesAntesEdicion = await this.find(
            {
                where: {
                    cancion: idCancion
                },
                relations: [
                    'artista',
                    'cancion'
                ]
            }
        );
        const artistasCancionAntesEdicion = respuestaCancionesAntesEdicion[0] as CancionArtistaEntity[];

        const cancionesArtistaACrear = [];
        let cancionesArtistaAEditar = artistasCancionAntesEdicion;
        idsArtistas
            .map(
                (artista, indice) => {
                    const artistasCancionCreado = artistasCancionAntesEdicion
                        .find(artistaCancion => {
                            return (artistaCancion.artista as ArtistaEntity).id === artista.id;
                        });
                    const esArtistaPrincipal = indice === 0 ? 1 : 0;
                    if (!artistasCancionCreado) {
                        const artistaCancionACrear: CancionArtistaEntity = {
                            esArtistaPrincipal,
                            artista: artista.id,
                            cancion: idCancion
                        };
                        cancionesArtistaACrear.push(artistaCancionACrear);
                    }
                }
            )
        await this.createMany(cancionesArtistaACrear);
        const idArtistasAEliminar = [];
        await cancionesArtistaAEditar
            .map(
                async (artistaCancion, indice) => {
                    const cancionArtistaGuardado = idsArtistas.find(artista => {
                        return artista.id === (artistaCancion.artista as ArtistaEntity).id;
                    });
                    if (!cancionArtistaGuardado) {
                        await this.delete(artistaCancion.id);
                        idArtistasAEliminar.push(artistaCancion.id);
                    } else {
                        artistaCancion.esArtistaPrincipal = cancionArtistaGuardado.esPrincipal;
                        await this.findOneByIdAndUpdate(artistaCancion.id, artistaCancion);
                    }
                }
            )
    }
}
