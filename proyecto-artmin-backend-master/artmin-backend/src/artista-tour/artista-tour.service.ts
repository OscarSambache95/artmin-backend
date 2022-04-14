import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {ArtistaTourEntity} from './artista-tour.entity';
import { ArtistaEntity } from '../artista/artista.entity';

@Injectable()
export class ArtistaTourService extends PrincipalService<ArtistaTourEntity> {
    constructor(
        @InjectRepository(ArtistaTourEntity)
        private readonly _artistaTourRepository: Repository<ArtistaTourEntity>,
    ) {
        super(_artistaTourRepository, ArtistaTourEntity);
    }

    async guardarArtistasTour(
      idTour: number,
      idsArtistas: number[],
    ) {
        const respuestaTouresAntesEdicion = await this.find(
          {
              where: {
                  tour: idTour,
              },
              relations: [
                  'artista',
                  'tour',
              ],
          },
        );
        const artistasTourAntesEdicion = respuestaTouresAntesEdicion[0] as ArtistaTourEntity[];

        const touresArtistaACrear = idsArtistas
          .map(
            (idArtista) => {
                const artistasTourCreado = artistasTourAntesEdicion
                  .find(artistaTour => {
                      return (artistaTour.artista as ArtistaEntity).id === idArtista;
                  });
                if (!artistasTourCreado) {
                    return {
                        artista: idArtista,
                        tour: idTour,
                    };
                }
            },
          )
          .filter(artistaTourFiltrados => artistaTourFiltrados);
        await this.createMany(touresArtistaACrear);
        const idArtistasAEliminar = artistasTourAntesEdicion
          .map(
            (artistaTour) => {
                const tourACrear = idsArtistas.find(idArtista => {
                    return idArtista === (artistaTour.artista as ArtistaEntity).id;
                });
                if (!tourACrear) {
                    return artistaTour.id;
                }
            },
          )
          .filter(idArtistaTourAEliminar => idArtistaTourAEliminar);
        if (idArtistasAEliminar && idArtistasAEliminar.length) {
            await this.delete(idArtistasAEliminar);
        }
    }
}
