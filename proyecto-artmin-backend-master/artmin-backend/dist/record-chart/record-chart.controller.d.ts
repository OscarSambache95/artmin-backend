import { PrincipalAbstractController } from '../principal/principal-controller';
import { RecordChartEntity } from './record-chart.entity';
import { RecordChartService } from './record-chart.service';
export declare class RecordChartController extends PrincipalAbstractController<RecordChartEntity> {
    private readonly _recordChartService;
    constructor(_recordChartService: RecordChartService);
    obtenerCharts(datosConsultaRecords: any): Promise<[RecordChartEntity[], number]>;
}
