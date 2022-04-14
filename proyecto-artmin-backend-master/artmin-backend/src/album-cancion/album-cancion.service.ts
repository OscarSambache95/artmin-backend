import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {AlbumCancionEntity} from './album-cancion.entity';
import {CancionEntity} from '../cancion/cancion.entity';
import {AlbumEntity} from '../album/album.entity';
import {CancionArtistaEntity} from '../cancion-artista/cancion-artista.entity';
import {ArtistaEntity} from '../artista/artista.entity';

@Injectable()
export class AlbumCancionService extends PrincipalService<AlbumCancionEntity> {
    constructor(
        @InjectRepository(AlbumCancionEntity)
        private readonly _albumCancionRepository: Repository<AlbumCancionEntity>,
    ) {
        super(_albumCancionRepository, AlbumCancionEntity);
    }

    async guardarCancionesAlbum(
        idAlbum: number,
        idsCanciones: Array<{ posicion?: number, idCancion: number }>
    ): Promise<[AlbumCancionEntity[], number]> {
        const respuestaCancionesAntesEdicion = await this.find(
            {
                where: {
                    album: idAlbum
                },
                relations: [
                    'cancion',
                    'album'
                ]
            }
        );
        const cancionesAlbumAntesEdicion = respuestaCancionesAntesEdicion[0] as AlbumCancionEntity[];

        const cancionesAlbumACrear = [];
        let cancionesAlbumAEditar = [];
        await Promise.all(
            idsCanciones
                .map(
                    async (cancion) => {
                        const cancionAlbumCreado = cancionesAlbumAntesEdicion
                            .find(cancionAlbum => {
                                return (cancionAlbum.cancion as CancionEntity).id === cancion.idCancion;
                            });
                        if (!cancionAlbumCreado) {
                            cancionesAlbumACrear.push(
                                {
                                    posicion: cancion.posicion ? cancion.posicion : await this.devolverPosicionUltimaCancionAlbum(idAlbum),
                                    cancion: cancion.idCancion,
                                    album: idAlbum
                                }
                            )
                        } else {
                            cancionAlbumCreado.posicion = cancion.posicion ? cancion.posicion : await this.devolverPosicionUltimaCancionAlbum(idAlbum);
                            cancionesAlbumAEditar.push(cancionAlbumCreado);
                        }
                    }
                )
        );
        await this.createMany(cancionesAlbumACrear);
        const idCancionesAlbumAEliminar = [];
        cancionesAlbumAntesEdicion
            .map(
                (cancionAlbum) => {
                    const cancionACrear = idsCanciones.find(cancion => {
                        return cancion.idCancion === (cancionAlbum.cancion as CancionEntity).id;
                    });
                    if (!cancionACrear) {
                        idCancionesAlbumAEliminar.push(cancionAlbum.id);
                    }
                }
            );
        if (idCancionesAlbumAEliminar && idCancionesAlbumAEliminar.length) {
            await this.delete(idCancionesAlbumAEliminar);
        }
        if (cancionesAlbumAEditar && cancionesAlbumAEditar.length) {
            await this._albumCancionRepository.save(cancionesAlbumAEditar);
        }
        await this.ordenarCancionesPorAlbum(idAlbum);
        return await this.find(
            {
                where: {
                    album: idAlbum
                },
                relations: [
                    'cancion',
                    'cancion.tipoCancion',
                    'cancion.imagenesCancion',
                    'cancion.artistasCancion',
                    'cancion.artistasCancion.artista',
                    'cancion.generosCancion',
                    'cancion.generosCancion.genero',
                    'album',
                    'album.imagenesAlbum',
                    'album.generosAlbum',
                    'album.generosAlbum.genero',
                    'album.artistasAlbum',
                    'album.artistasAlbum.artista',
                ]
            }
        ) as [AlbumCancionEntity[], number]
    }

    async devolverPosicionUltimaCancionAlbum(
        idAlbum: number
    ) {
        const respuestaUltimaCancionAlbum = await this.find(
            {
                where: {
                    album: idAlbum
                },
                take: 1,
                order: {
                    posicion: 'DESC'
                }
            }
        );
        return (respuestaUltimaCancionAlbum[0] as AlbumCancionEntity[]).length === 0 ? 1 : (respuestaUltimaCancionAlbum[0][0].posicion + 1);
    }

    async guardarAlbumesCancion(
        idCancion: number,
        idsAlbumes: number[]
    ) {
        const respuestaAlbumesCancionAntesEdicion = await this.find(
            {
                where: {
                    cancion: idCancion
                },
                relations: [
                    'album',
                    'cancion'
                ]
            }
        );
        const albumesCancionAntesEdicion = respuestaAlbumesCancionAntesEdicion[0] as AlbumCancionEntity[];

        const albumesCancionACrear = [];
        let albumesCancionAEditar = [];
        await Promise.all(
            idsAlbumes
                .map(
                    async (idAlbum, indice) => {
                        const albumCancionCreado = albumesCancionAntesEdicion
                            .find(albumCancion => {
                                return (albumCancion.album as AlbumEntity).id === idAlbum;
                            });
                        if (!albumCancionCreado) {
                            const albumCancionACrear: AlbumCancionEntity = {
                                posicion: await this.devolverPosicionUltimaCancionAlbum(idAlbum),
                                album: idAlbum,
                                cancion: idCancion
                            };
                            albumesCancionACrear.push(albumCancionACrear);
                        } else {
                            albumesCancionAEditar.push(albumCancionCreado);
                        }
                    }
                )
        )
        this.createMany(albumesCancionACrear);
        const idAlbumesCancionAEliminar = [];
        albumesCancionAEditar = albumesCancionAEditar
            .filter(
                (albumCancion, indice) => {
                    const albumCancionGuardado = idsAlbumes.find(idAlbum => {
                        return idAlbum === (albumCancion.album as AlbumEntity).id;
                    });
                    if (!albumCancionGuardado) {
                        idAlbumesCancionAEliminar.push(albumCancion.id);
                        idAlbumesCancionAEliminar.splice(indice, 1);
                    }
                    return albumCancionGuardado;
                }
            )
        if (idAlbumesCancionAEliminar && idAlbumesCancionAEliminar.length) {
            await this.delete(idAlbumesCancionAEliminar);
        }
        if (albumesCancionAEditar && albumesCancionAEditar.length) {
            await this._albumCancionRepository.save(albumesCancionAEditar);
        }
        await idsAlbumes
            .map(
                async idAlbum => {
                    await this.ordenarCancionesPorAlbum(idAlbum);
                }
            );
    }

    async ordenarCancionesPorAlbum(
        idAlbum: number
    ) {
        const respuestaCancionesAlbumSinOrdenar = await this.find(
            {
                where: {
                    album: idAlbum
                },
                order: {
                    posicion: 'ASC'
                }
            }
        );
        const arregloCancionesAlbumSinOrdenar = respuestaCancionesAlbumSinOrdenar[0] as AlbumCancionEntity[];
        await arregloCancionesAlbumSinOrdenar.map(
            async (cancionAlbum, indice) => {
                await this._albumCancionRepository.update(
                    cancionAlbum.id,
                    {
                        posicion: indice + 1,
                    });
            }
        );
    }
}
