import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {AlbumArtistaEntity} from './album-artista.entity';
import {ArtistaEntity} from '../artista/artista.entity';

@Injectable()
export class AlbumArtistaService extends PrincipalService<AlbumArtistaEntity> {
    constructor(
        @InjectRepository(AlbumArtistaEntity)
        private readonly _albumArtistaRepository: Repository<AlbumArtistaEntity>,
    ) {
        super(_albumArtistaRepository, AlbumArtistaEntity);
    }

    async guardarArtistasAlbumCancion(
        idAlbum: number,
        idsArtistas: number[],
    ) {
        const respuestaAlbumesAntesEdicion = await this.find(
            {
                where: {
                    album: idAlbum,
                },
                relations: [
                    'artista',
                    'album',
                ],
            },
        );
        const artistasAlbumAntesEdicion = respuestaAlbumesAntesEdicion[0] as AlbumArtistaEntity[];

        const albumesArtistaACrear = idsArtistas
            .map(
                (idArtista) => {
                    const artistasAlbumCreado = artistasAlbumAntesEdicion
                        .find(artistaAlbum => {
                            return (artistaAlbum.artista as ArtistaEntity).id === idArtista;
                        });
                    if (!artistasAlbumCreado) {
                        return {
                            artista: idArtista,
                            album: idAlbum,
                        };
                    }
                },
            )
            .filter(artistaAlbumFiltrados => artistaAlbumFiltrados);
        await this.createMany(albumesArtistaACrear);
        const idArtistasAEliminar = artistasAlbumAntesEdicion
            .map(
                (artistaAlbum) => {
                    const albumACrear = idsArtistas.find(idArtista => {
                        return idArtista === (artistaAlbum.artista as ArtistaEntity).id;
                    });
                    if (!albumACrear) {
                        return artistaAlbum.id;
                    }
                },
            )
            .filter(idArtistaAlbumAEliminar => idArtistaAlbumAEliminar);
        if (idArtistasAEliminar && idArtistasAEliminar.length) {
            await this.delete(idArtistasAEliminar);
        }
    }
}
