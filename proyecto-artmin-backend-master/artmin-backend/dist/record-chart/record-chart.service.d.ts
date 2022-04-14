import { Repository } from 'typeorm';
import { PrincipalService } from '../principal/principal-service';
import { RecordChartEntity } from './record-chart.entity';
export declare class RecordChartService extends PrincipalService<RecordChartEntity> {
    private readonly _recordChartRepository;
    constructor(_recordChartRepository: Repository<RecordChartEntity>);
    obtenerRecordsChart(datosConsultaRecords: any): Promise<[RecordChartEntity[], number]>;
}
