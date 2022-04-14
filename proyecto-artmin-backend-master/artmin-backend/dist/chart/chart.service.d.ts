import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { ChartEntity } from './chart.entity';
export declare class ChartService extends PrincipalService<ChartEntity> {
    private readonly _chartRepository;
    constructor(_chartRepository: Repository<ChartEntity>);
    obtenerCharts(datosConsultaChart: any): Promise<[ChartEntity[], number]>;
}
