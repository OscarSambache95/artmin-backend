import {Injectable, InternalServerErrorException} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {ImagenEntity} from './imagen.entity';
import * as fs from 'fs';
import * as moment from 'moment';

@Injectable()
export class ImagenService extends PrincipalService<ImagenEntity> {
    constructor(
        @InjectRepository(ImagenEntity)
        private readonly _imagenRepository: Repository<ImagenEntity>,
    ) {
        super(_imagenRepository, ImagenEntity);
    }

    pathCarpetaImagenes = __dirname + '/../../public/imagenes/';

    async guardarImagen(
        imagen,
        entidad: string,
        esPrincipal: 0 | 1,
        idEntidad: number,
        pathAlterno: string,
        idImagen?: number,
    )
        : Promise<ImagenEntity> {
        try {
            let nombreImagen = pathAlterno;
            if (imagen && imagen.buffer) {
                const fecha = moment(new Date());
                nombreImagen = `imagen-${entidad}-${idEntidad}-${fecha}.jpg`;
                const pathImagen = this.pathCarpetaImagenes + '/' + nombreImagen;
                fs.writeFile(
                    pathImagen,
                    imagen.buffer,
                    'base64',
                    async err => {
                        if (err) {
                            throw err;
                        }
                    },
                );
            }

            const imagenACrearEditar: ImagenEntity = {
                url: nombreImagen,
                esPrincipal,
            };
            imagenACrearEditar[entidad] = idEntidad;
            if (!idImagen) {
                const imagenCreada = await this.create(imagenACrearEditar);
                return imagenCreada;
            } else {
                const imagenAntesEditar = await this.findOne(
                    {
                        where:
                            {
                                id: idImagen,
                            },
                    },
                );
                await this._imagenRepository.update(
                    idImagen,
                    {
                        esPrincipal: 0,
                    },
                );
                const imagenEditada = await this.create(imagenACrearEditar);
                if (entidad === 'album') {
                    const consultaEditarImagenes = {
                        where: {
                            url: imagenAntesEditar.url,
                        },
                    };
                    const imagenesConIgualUrl = (await this.find(consultaEditarImagenes) as [ImagenEntity[], number]);
                    if (imagenesConIgualUrl && imagenesConIgualUrl[0] && imagenesConIgualUrl[0].length) {
                        const idsImagenesConIgualUrl = imagenesConIgualUrl[0]
                            .map(imagen => imagen.id);
                        this._imagenRepository.update(
                            idsImagenesConIgualUrl,
                            {
                                url: imagenEditada.url,
                            },
                        );
                    }
                }

                return imagenEditada;
            }

        } catch (e) {
            console.error({error: e, mensaje: 'error al guardar el imagen'});
            throw new InternalServerErrorException(e);
        }
    }

    eliminarArchivo(pathImagen: string) {
        const filePath = pathImagen;
        fs.unlink(filePath, err => {
            if (err) { throw err; }
        });
    }
}
