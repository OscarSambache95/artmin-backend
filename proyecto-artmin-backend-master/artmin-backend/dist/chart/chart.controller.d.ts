import { PrincipalAbstractController } from '../principal/principal-controller';
import { ChartEntity } from './chart.entity';
import { ChartService } from './chart.service';
export declare class ChartController extends PrincipalAbstractController<ChartEntity> {
    private readonly _chartService;
    constructor(_chartService: ChartService);
    obtenerCharts(datosConsultaCharts: any): Promise<[ChartEntity[], number]>;
}
