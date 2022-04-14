import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {CertificadoChartEntity} from './certificado-chart.entity';
import {getRepository} from 'typeorm/index';
import {CertificadoChartFechaEntity} from '../certificado-chart-fecha/certificado-chart-fecha.entity';
import {CertificadoChartFechaService} from '../certificado-chart-fecha/certificado-chart-fecha.service';

@Injectable()
export class CertificadoChartService extends PrincipalService<CertificadoChartEntity> {
    constructor(
        @InjectRepository(CertificadoChartEntity)
        private readonly _certificadoChartRepository: Repository<CertificadoChartEntity>,
        private readonly _certificadoChartFechaService: CertificadoChartFechaService
    ) {
        super(_certificadoChartRepository, CertificadoChartEntity);
    }

    async guardarCertificadoChart(
        certificadoChart: CertificadoChartEntity,
        certificadosChartFecha: CertificadoChartFechaEntity[]
    ): Promise<CertificadoChartEntity> {
        try {
            const certificadoChartCreado: CertificadoChartEntity = await this.create(certificadoChart);
            if (certificadoChartCreado) {
                await this._certificadoChartFechaService
                    .guardarCertificadosChartFecha(
                        certificadoChartCreado.id,
                        certificadosChartFecha
                    );

                const certificadosChartFechaOrdenadas = await this._certificadoChartFechaService
                    .find(
                        {
                            where: {
                                certificadoChart: certificadoChartCreado.id,
                            },
                            order: {
                                fecha: "DESC",
                            },
                            take: 1
                        }
                    );
                if (certificadosChartFechaOrdenadas[0] && certificadosChartFechaOrdenadas[0][0]) {
                    await this.repository.update(
                        certificadoChartCreado.id,
                        {
                            fechaActualizacion: certificadosChartFechaOrdenadas[0][0].fecha
                        }
                    )
                }
                const consulta = {
                    where: {
                        id: certificadoChartCreado.id,
                    },
                    relations: [
                        'chart',
                        'certificadosChartFecha',
                        'certificadosChartFecha.certificado',
                        'certificadosChartFecha.certificado.medida',
                        'cancion',
                        'cancion.imagenesCancion',
                        'cancion.artistasCancion',
                        'cancion.artistasCancion.artista',
                        'album',
                        'album.imagenesAlbum',
                        'album.artistasAlbum',
                        'album.artistasAlbum.artista',
                        'video',
                        'video.cancion',
                        'video.cancion.artistasCancion',
                        'video.cancion.artistasCancion.artista',
                    ]
                }
                return await this.findOne(consulta);
            }
        } catch (e) {
            console.error(e);
            throw new BadRequestException(e);
        }
    }

    async editarCertificadoChart(
        idCertificadoChart: number,
        certificadoChart: CertificadoChartEntity,
        certificadosChartFecha: CertificadoChartFechaEntity[]
    ): Promise<CertificadoChartEntity> {
        try {
            const certificadoChartEditado: CertificadoChartEntity = await this.findOneByIdAndUpdate(
                idCertificadoChart,
                certificadoChart
            );
            if (certificadoChartEditado) {
                await this._certificadoChartFechaService
                    .guardarCertificadosChartFecha(
                        certificadoChartEditado.id,
                        certificadosChartFecha
                    )
                const certificadosChartFechaOrdenadas = await this._certificadoChartFechaService
                    .find(
                        {
                            where: {
                                certificadoChart: certificadoChartEditado.id,
                            },
                            order: {
                                fecha: "DESC",
                            },
                            take: 1
                        }
                    );
                if (certificadosChartFechaOrdenadas[0] && certificadosChartFechaOrdenadas[0][0]) {
                    certificadoChartEditado.fechaActualizacion = certificadosChartFechaOrdenadas[0][0].fecha;
                    await this.findOneByIdAndUpdate(
                        certificadoChartEditado.id,
                        certificadoChartEditado
                    )
                }

                const consulta = {
                    where: {
                        id: certificadoChartEditado.id,
                    },
                    relations: [
                        'chart',
                        'certificadosChartFecha',
                        'certificadosChartFecha.certificado',
                        'certificadosChartFecha.certificado.medida',
                        'cancion',
                        'cancion.imagenesCancion',
                        'cancion.artistasCancion',
                        'cancion.artistasCancion.artista',
                        'album',
                        'album.imagenesAlbum',
                        'album.artistasAlbum',
                        'album.artistasAlbum.artista',
                        'video',
                        'video.cancion',
                        'video.cancion.artistasCancion',
                        'video.cancion.artistasCancion.artista',
                    ]
                }
                return await this.findOne(consulta);
            }
        } catch (e) {
            console.error(e);
            throw new BadRequestException(e);
        }
    }

    async obtenerCertificadosChart(
        datosConsultaCertificados
    ) {
        let condicionNombre = '';
        let condicionArtista = datosConsultaCertificados.idArtista !== '' ? ' ( artista.id = :idArtista )' : '';
        let condicionAChart = datosConsultaCertificados.idChart !== '' ? ' ( chart.id = :idChart )' : '';
        let condicionACertificado = datosConsultaCertificados.idCertificado ? ' ( certificado.id = :idCertificado )' : '';

        const consultaBase = await getRepository(CertificadoChartEntity)
            .createQueryBuilder('certificadoChart')
            .leftJoinAndSelect('certificadoChart.chart', 'chart')
            .leftJoinAndSelect('certificadoChart.certificadosChartFecha', 'certificadoChartFecha')
            .leftJoinAndSelect('certificadoChartFecha.certificado', 'certificado')
            .leftJoinAndSelect('certificado.medida', 'medida')

        if (datosConsultaCertificados.tipo === 'cancion') {
            condicionNombre = datosConsultaCertificados.busqueda !== '' ? ' ( cancion.nombre LIKE :busqueda )' : '';
            consultaBase
                .leftJoinAndSelect('certificadoChart.cancion', 'cancion')
                .leftJoinAndSelect('cancion.imagenesCancion', 'imagenCancion')
                .leftJoinAndSelect('cancion.artistasCancion', 'cancionArtista')
                .leftJoinAndSelect('cancionArtista.artista', 'artista')
        }
        if (datosConsultaCertificados.tipo === 'album') {
            condicionNombre = datosConsultaCertificados.busqueda !== '' ? ' ( album.nombre LIKE :busqueda )' : '';
            consultaBase
                .leftJoinAndSelect('certificadoChart.album', 'album')
                .leftJoinAndSelect('album.imagenesAlbum', 'imagenAlbum')
                .leftJoinAndSelect('album.artistasAlbum', 'albumArtista')
                .leftJoinAndSelect('albumArtista.artista', 'artista')
        }
        if (datosConsultaCertificados.tipo === 'video') {
            condicionNombre = datosConsultaCertificados.busqueda !== '' ? ' ( video.nombre LIKE :busqueda )' : '';
            consultaBase
                .leftJoinAndSelect('certificadoChart.video', 'video')
                .leftJoinAndSelect('video.cancion', 'cancion')
                .leftJoinAndSelect('cancion.artistasCancion', 'cancionArtista')
                .leftJoinAndSelect('cancionArtista.artista', 'artista')
        }
        const arregloCondiciones = [
            condicionArtista,
            condicionAChart,
            condicionACertificado,
            condicionNombre,
        ].filter(condicion => condicion !== '');
        const condicion = arregloCondiciones.reduce((cadena, condicion, indice) => {
            return cadena + ' ' + condicion + (indice + 1 === arregloCondiciones.length ? '' : ' AND ');
        }, '');
        return consultaBase
            .where(condicion, {
                busqueda: `%${datosConsultaCertificados.busqueda}%`,
                idArtista: datosConsultaCertificados.idArtista,
                idChart: datosConsultaCertificados.idChart,
                idCertificado: datosConsultaCertificados.idCertificado,
            })
            .orderBy('certificadoChart.fechaActualizacion', 'DESC')
            .getManyAndCount();
    }
}
