import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { AlbumCancionEntity } from './album-cancion.entity';
export declare class AlbumCancionService extends PrincipalService<AlbumCancionEntity> {
    private readonly _albumCancionRepository;
    constructor(_albumCancionRepository: Repository<AlbumCancionEntity>);
    guardarCancionesAlbum(idAlbum: number, idsCanciones: Array<{
        posicion?: number;
        idCancion: number;
    }>): Promise<[AlbumCancionEntity[], number]>;
    devolverPosicionUltimaCancionAlbum(idAlbum: number): Promise<any>;
    guardarAlbumesCancion(idCancion: number, idsAlbumes: number[]): Promise<void>;
    ordenarCancionesPorAlbum(idAlbum: number): Promise<void>;
}
