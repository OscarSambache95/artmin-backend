import { FindConditions, FindManyOptions, FindOneOptions, Repository } from 'typeorm';
export declare abstract class PrincipalService<Entity> {
    protected readonly repository: Repository<Entity>;
    private Entidad?;
    private nombreRepositorio?;
    constructor(repository: Repository<Entity>, Entidad?: any, nombreRepositorio?: string);
    findOne(criterioBusqueda?: FindOneOptions<Entity>): Promise<Entity> | undefined;
    find(criterioBusqueda?: FindManyOptions<Entity> | any, arregloIds?: number[]): Promise<Entity[] | [Entity[], number]>;
    create(registro: Entity): Promise<any>;
    createMany(registros: Entity[]): Promise<any>;
    findOneByIdAndUpdate(id: string | number | Date, datosAActualizar: Entity, esSocket?: boolean): Promise<any>;
    delete(criterio?: string | string[] | number | number[] | Date | Date[] | FindConditions<Entity>): Promise<any>;
}
