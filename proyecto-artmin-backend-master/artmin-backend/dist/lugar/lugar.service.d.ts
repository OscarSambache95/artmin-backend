import { TreeRepository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { LugarEntity } from './lugar.entity';
import { ImagenService } from '../imagen/imagen.service';
export declare class LugarService extends PrincipalService<LugarEntity> {
    private readonly _lugarRepository;
    private readonly _imagenService;
    constructor(_lugarRepository: TreeRepository<LugarEntity>, _imagenService: ImagenService);
    buscarLugares(datosBuscarLugares: any): Promise<(number | LugarEntity[])[]>;
    obtenerLugaresPadre(lugaresConCoindicencias: LugarEntity[]): Promise<LugarEntity[]>;
    obtenerLugarPadre(lugar: LugarEntity): Promise<LugarEntity>;
    guardarLugarImagen(lugar: LugarEntity, imagenFile: any): Promise<LugarEntity>;
}
