import {
    FindConditions,
    FindManyOptions,
    FindOneOptions, In, Like, Not,
    Repository,
} from 'typeorm';
import {InternalServerErrorException} from '@nestjs/common';

export abstract class PrincipalService<Entity> {
    protected readonly repository: Repository<Entity>;
    private Entidad?;
    private nombreRepositorio?;

    constructor(
        repository: Repository<Entity>,
        Entidad?: any,
        nombreRepositorio?: string,
    ) {
        this.repository = repository;
        this.Entidad = Entidad;
        this.nombreRepositorio = nombreRepositorio;
    }

    async findOne(
        criterioBusqueda?: FindOneOptions<Entity>,
    ): Promise<Entity> | undefined {
        try {
            const respuesta = await this.repository.findOne(criterioBusqueda);
            return respuesta;
        } catch (e) {
            console.error({
                mensaje: 'Error findOne',
                error: e,
            });
            throw new InternalServerErrorException({
                error: 500,
                mensaje: 'Error del servidor',
            });
        }
    }

    async find(
        criterioBusqueda?: FindManyOptions<Entity> | any,
        arregloIds?: number[],
    ): Promise<Entity[] | [Entity[], number]> {
        try {
            if (criterioBusqueda && criterioBusqueda.camposOr) {
                criterioBusqueda.camposOr.map(campo => {
                    if (campo.like) {
                        let objetoConsulta = {};
                        criterioBusqueda.where = [];
                        objetoConsulta[campo.nombreCampo] = Like(`%${campo.valor}%`)
                        criterioBusqueda.where.push(objetoConsulta)
                    }
                });
            }
            if (criterioBusqueda && criterioBusqueda.camposIn) {
                criterioBusqueda.camposIn.map(campo => {
                    let objetoConsulta = {};
                    criterioBusqueda.where = {};
                    objetoConsulta[campo.nombreCampo] = In(campo.valor)
                    criterioBusqueda.where = objetoConsulta;
                });
            }
            const respuesta = await this.repository.findAndCount(criterioBusqueda);
            return respuesta;
        } catch (e) {
            console.error({
                mensaje: 'Error find',
                error: e,
            });
            throw new InternalServerErrorException({
                error: 500,
                mensaje: 'Error del servidor',
            });
        }
    }

    async create(registro: Entity): Promise<any> {
        try {
            const respuesta = await this.repository.save(registro);
            return respuesta;
        } catch (e) {
            console.error({
                mensaje: 'Error create',
                error: e,
            });
            throw new InternalServerErrorException({
                error: 500,
                mensaje: 'Error del servidor',
            });
        }
    }

    async createMany(registros: Entity[]): Promise<any> {
        try {
            const respuesta = await this.repository.create(registros);
            return await this.repository.save(respuesta);
        } catch (e) {
            console.error({
                mensaje: 'Error create many',
                error: e,
            });
            throw new InternalServerErrorException({
                error: 500,
                mensaje: 'Error del servidor',
            });
        }
    }

    async findOneByIdAndUpdate(
        id: string | number | Date,
        datosAActualizar: Entity,
        esSocket?: boolean,
    ): Promise<any> {
        try {
            await this.repository.update(id, datosAActualizar);
            const respuesta = await this.repository.findOne(id);
            return respuesta;
        } catch (e) {
            console.error({
                mensaje: 'Error create findOneByIdAndUpdate',
                error: e,
            });
            throw new InternalServerErrorException({
                error: 500,
                mensaje: 'Error del servidor',
            });
        }
    }

    async delete(
        criterio?:
            | string
            | string[]
            | number
            | number[]
            | Date
            | Date[]
            | FindConditions<Entity>,
    ): Promise<any> {
        try {
            const respuesta = await this.repository.delete(criterio);
            return respuesta;
        } catch (e) {
            console.error({
                mensaje: 'Error create delete',
                error: e,
            });
            throw new InternalServerErrorException({
                error: 500,
                mensaje: 'Error del servidor',
            });
        }
    }
}
