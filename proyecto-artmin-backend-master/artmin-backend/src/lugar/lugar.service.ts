import {BadRequestException, Injectable, InternalServerErrorException} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like, TreeRepository} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {LugarEntity} from './lugar.entity';
import {ImagenService} from '../imagen/imagen.service';

@Injectable()
export class LugarService extends PrincipalService<LugarEntity> {
    constructor(
        @InjectRepository(LugarEntity)
        private readonly _lugarRepository: TreeRepository<LugarEntity>,
        private readonly _imagenService: ImagenService,
    ) {
        super(_lugarRepository, LugarEntity);
    }

    async buscarLugares(
        datosBuscarLugares,
    ) {
        const where: any = {};
        if (datosBuscarLugares.nombre && datosBuscarLugares.nombre !== '') {
            where.nombre = Like(`%${datosBuscarLugares.nombre}%`);
        }
        if (datosBuscarLugares.tipo && datosBuscarLugares.tipo !== '') {
            where.tipo = datosBuscarLugares.tipo;
        }
        const criteriosBusqueda = {
            where,
            relations: [
                'lugarPadre',
                'imagenesLugar',
            ],
        };
        try {
            const lugaresEncontradasConPadres: LugarEntity[] = (await this.find(
                criteriosBusqueda,
            ))[0] as LugarEntity[];
            try {
                const respuesta = await this.obtenerLugaresPadre(
                    lugaresEncontradasConPadres,
                );
                return [respuesta, respuesta.length];
            } catch (e) {
                console.error({
                    error: e,
                    mensaje: 'Error al buscar los lugares padre',
                    data: datosBuscarLugares,
                });
                throw new InternalServerErrorException({
                    mensaje: 'Error al buscar los lugares padre',
                });
            }
        } catch (e) {
            console.error({
                error: e,
                mensaje: 'Error al buscar los lugares padre',
                data: criteriosBusqueda,
            });
            throw new InternalServerErrorException({
                mensaje: 'Error al buscar los lugares padre',
            });
        }
    }

    async obtenerLugaresPadre(
        lugaresConCoindicencias: LugarEntity[],
    ): Promise<LugarEntity[]> {
        try {
            const lugaresEncontradasConPadres: LugarEntity[] = await Promise.all(
                lugaresConCoindicencias.map(async (lugar: LugarEntity) => {
                    try {
                        const areasPisoPadre: LugarEntity = await this._lugarRepository.findAncestorsTree(
                            lugar,
                        );
                        return this.obtenerLugarPadre(areasPisoPadre);
                    } catch (e) {
                        console.error({
                            error: e,
                            mensaje: 'Error al obtener el lugar padre',
                            data: {
                                lugar,
                            },
                        });
                        throw new InternalServerErrorException({
                            mensaje: 'Error al obtener el lugar padre',
                        });
                    }
                }),
            );
            return lugaresEncontradasConPadres;
        } catch (e) {
            console.error({
                error: e,
                mensaje: 'Error al obtener arreglo de las áreas piso padre',
                data: {lugaresConCoindicencias},
            });
            throw new InternalServerErrorException({
                mensaje: 'Error al obtener arreglo de  las áreas piso padre',
            });
        }
    }

    async obtenerLugarPadre(lugar: LugarEntity): Promise<LugarEntity> {
        try {
            if (!lugar.lugarPadre) {
                return await this._lugarRepository.findDescendantsTree(
                    lugar as LugarEntity,
                );
            } else {
                return this.obtenerLugarPadre(lugar.lugarPadre as LugarEntity);
            }
        } catch (e) {
            console.error({
                error: e,
                mensaje: 'Error al obtener el lugar padre',
                data: {lugar},
            });
            throw new InternalServerErrorException({
                mensaje: 'Error al obtener el lugar padre',
            });
        }
    }

    async guardarLugarImagen(
        lugar: LugarEntity,
        imagenFile: any,
    ) {
        try {
            let lugarCreadoEditado;
            if (lugar.id) {
                delete (lugar as any).imagen;
                lugarCreadoEditado = await this.findOneByIdAndUpdate(lugar.id, lugar);
            } else {
                lugarCreadoEditado = await this.create(lugar);
            }
            if (lugarCreadoEditado) {
                if (lugar.id) {
                    const imagenEncontrada = await this._imagenService.findOne(
                        {
                            where: {
                                lugar: lugar.id,
                                esPrincipal: 1,
                            },
                        },
                    );
                    if (imagenFile) {
                        await this._imagenService.guardarImagen(
                            imagenFile,
                            'lugar',
                            1,
                            lugarCreadoEditado.id,
                            imagenEncontrada.url,
                            imagenEncontrada.id,
                        );
                    }

                } else {
                    await this._imagenService.guardarImagen(
                        imagenFile,
                        'lugar',
                        1,
                        lugarCreadoEditado.id,
                        '',
                    );
                }

                const consulta = {
                    where: {
                        id: lugarCreadoEditado.id,
                    },
                    relations: [
                        'lugarPadre',
                        'lugaresHijos',
                        'imagenesLugar',
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
