import { BadRequestException, Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository, FindOneOptions, Like, getRepository } from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {TourEntity} from './tour.entity';
import { ImagenService } from '../imagen/imagen.service';
import { AlbumArtistaEntity } from '../album-artista/album-artista.entity';
import { ArtistaTourEntity } from '../artista-tour/artista-tour.entity';
import { ArtistaTourService } from '../artista-tour/artista-tour.service';

@Injectable()
export class TourService extends PrincipalService<TourEntity> {
    constructor(
        @InjectRepository(TourEntity)
        private readonly _tourRepository: Repository<TourEntity>,
        private readonly _imagenService: ImagenService,
        private readonly _artistaTourService: ArtistaTourService,
    ) {
        super(_tourRepository, TourEntity);
    }

    async obtenerTourPorArtistasTipo(
      datosConsultaTours,
    ) {
        const queryBuilder =  await getRepository(TourEntity)
          .createQueryBuilder('tour')
          .innerJoinAndSelect('tour.imagenesTour', 'imagenTour')
          .innerJoin('tour.artistasTour', 'artistaTour')
          .innerJoin('artistaTour.artista', 'artista')
          .andWhere('imagenTour.esPrincipal = :esPrincipal', {esPrincipal: datosConsultaTours.esImagenPrincipal});

        if (datosConsultaTours.busqueda) {
            queryBuilder
              .andWhere('tour.nombre LIKE :busqueda', {busqueda: `%${datosConsultaTours.busqueda}%`});
        }
        if (datosConsultaTours.tipo) {
            queryBuilder
              .andWhere('tour.tipo = :tipo', {tipo: datosConsultaTours.tipo});
        }
        if (datosConsultaTours.idArtista) {
            queryBuilder
              .andWhere('artista.id = :idArtista', {idArtista: datosConsultaTours.idArtista});
        }

        return await queryBuilder
        .orderBy('tour.id', 'DESC')
        .getManyAndCount();
    }

    async guardarTour(tour: any, imagenFile) {
        try {
            let tourCreadoEditado;
            const artistas = [...tour.artistas];
            if (tour.id) {
                delete tour.artistas;
                delete (tour as any).imagen;
                delete tour.artistasTour;
                tourCreadoEditado = await this.findOneByIdAndUpdate(tour.id, { ...tour });
            } else {
                tourCreadoEditado = await this.create({ ...tour });
            }
            if (tourCreadoEditado) {
                if (tour.id) {
                    const imagenEncontrada = await this._imagenService.findOne(
                      {
                          where: {
                              tour: tour.id,
                              esPrincipal: 1,
                          },
                      },
                    );
                    if (imagenFile) {
                        await this._imagenService.guardarImagen(
                          imagenFile,
                          'tour',
                          1,
                          tourCreadoEditado.id,
                          imagenEncontrada.url,
                          imagenEncontrada.id,
                        );
                    }

                    await this._artistaTourService.guardarArtistasTour(
                      tour.id,
                      artistas,
                    );
                } else {
                    await this._imagenService.guardarImagen(
                      imagenFile,
                      'tour',
                      1,
                      tourCreadoEditado.id,
                      '',
                    );
                    const artistasTour = artistas.map(
                      (idArtista) => {
                          const artistasTourACrear: ArtistaTourEntity = {
                              artista: idArtista,
                              tour: tourCreadoEditado.id,
                          };
                          return artistasTourACrear;
                      },
                    );
                    await this._artistaTourService.createMany(artistasTour);
                }

                const consulta = {
                    where: {
                        id: tourCreadoEditado.id,
                    },
                    relations: [
                        'imagenesTour',
                        'artistasTour',
                        'artistasTour.artista',
                    ],
                };
                return await this.findOne(consulta);
            }
        } catch (e) {
            console.error(e);
            throw new BadRequestException(e);
        }
    }
}
