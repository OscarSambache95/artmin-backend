import {
    BadRequestException,
    Body,
    Controller,
    FileInterceptor,
    Get,
    Post,
    Query, UploadedFile,
    UseInterceptors
} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {LugarEntity} from './lugar.entity';
import {LugarService} from './lugar.service';
import {CancionEntity} from '../cancion/cancion.entity';

@Controller('lugar')
export class LugarController extends PrincipalAbstractController<LugarEntity> {
    constructor(private readonly _lugarService: LugarService,
    ) {
        super(_lugarService);
    }

    @Post('crear-lugar-imagen')
    @UseInterceptors(FileInterceptor('imagen'))
    async crearCancion(
        @UploadedFile() file,
        @Body('lugar') lugarJsonString,
    ): Promise<any> {
        try {
            const lugar = JSON.parse(lugarJsonString);
            return await this._lugarService.guardarLugarImagen(
                lugar,
                file,
            );
        } catch (error) {
            console.error('Error al crear lugar', error);
            throw new BadRequestException('Error al crear el lugar');
        }
    }

    @Get('buscar-lugares-padre')
    async buscarLugares(
        @Query('datosConsulta') datosConsulta,
    ) {
        try {
            return await this._lugarService.buscarLugares(
                JSON.parse(
                    datosConsulta,
                )
            );
        } catch (e) {
            console.error({
                error: e,
                mensaje: 'Error al buscar los lugares padre',
                data: JSON.parse(datosConsulta),
            });
            throw new BadRequestException({
                mensaje: 'Error al buscar lugares padre',
            });
        }
    }
}
