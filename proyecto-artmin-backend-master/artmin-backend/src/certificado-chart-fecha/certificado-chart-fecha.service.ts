import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, FindOneOptions, Like} from 'typeorm';
import {PrincipalService} from '../principal/principal-service';
import {CertificadoChartFechaEntity} from './certificado-chart-fecha.entity';

@Injectable()
export class CertificadoChartFechaService extends PrincipalService<CertificadoChartFechaEntity> {
    constructor(
        @InjectRepository(CertificadoChartFechaEntity)
        private readonly _certificadoChartRepository: Repository<CertificadoChartFechaEntity>,
    ) {
        super(_certificadoChartRepository, CertificadoChartFechaEntity);
    }

    async guardarCertificadosChartFecha(
        idChartCertificado: number,
        certificadosChartFecha: CertificadoChartFechaEntity[]
    ) {
        const respuestaCertificadosChartFechaAntesEdicion = await this.find(
            {
                where: {
                    certificadoChart: idChartCertificado
                }
            }
        );
        const certificadosChartFechaAntesEdicion = respuestaCertificadosChartFechaAntesEdicion[0] as CertificadoChartFechaEntity[];
        const certificadosChartFechaACrearEditar = certificadosChartFecha
            .map(
                (certificadosChartFecha) => {
                    certificadosChartFecha.certificadoChart = idChartCertificado;
                    return certificadosChartFecha;
                }
            );
        await this.repository.save(certificadosChartFechaACrearEditar);
        const idsCertificadoChartFechaAEliminar = certificadosChartFechaAntesEdicion
            .map(
                (certificadoChartFecha) => {
                    const certificadosChartFechaGuardado = certificadosChartFecha.find(certificadoChartFechaAntesEdicion => {
                        return certificadoChartFecha.id === certificadoChartFechaAntesEdicion.id;
                    });
                    if (!certificadosChartFechaGuardado) {
                        return certificadoChartFecha.id;
                    }
                }
            )
            .filter(idCertificadoChartFechaAEliminar => idCertificadoChartFechaAEliminar);
        if (idsCertificadoChartFechaAEliminar && idsCertificadoChartFechaAEliminar.length) {
            await this.delete(idsCertificadoChartFechaAEliminar);
        }
    }
}
