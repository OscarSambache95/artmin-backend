import {
    BadRequestException,
    Body,
    Controller,
    FileInterceptor,
    Get,
    Post,
    Query, UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {TourEntity} from './tour.entity';
import {TourService} from './tour.service';

@Controller('tour')
export class TourController extends PrincipalAbstractController<TourEntity> {
    constructor(private readonly _tourService: TourService,
    ) {
        super(_tourService);
    }

    @Get('tours-por-artista-tipo')
    async obtenerTourPorArtistasTipo(
      @Query('datosConsulta') datosConsultaTours) {
        const existeDatos = datosConsultaTours;
        if (existeDatos) {
            return await this._tourService.obtenerTourPorArtistasTipo(
              JSON.parse(datosConsultaTours),
            );
        } else {
            throw new BadRequestException('No envía parámetros');
        }
    }

    @Post('crear-tour-imagen')
    @UseInterceptors(FileInterceptor('imagen'))
    async crearCancion(
      @UploadedFile() file,
      @Body('tour') tourJsonString,
    ): Promise<any> {
        try {
            const tour = JSON.parse(tourJsonString);
            return await this._tourService.guardarTour(
              tour,
              file,
            );
        } catch (error) {
            console.error('Error al crear tour', error);
            throw new BadRequestException('Error al crear el tour');
        }
    }
}
