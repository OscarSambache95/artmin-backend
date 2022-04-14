import {
    BadRequestException,
    Body,
    Controller,
    FileInterceptor, Get,
    Post,
    Query,
    UploadedFile,
    UseInterceptors
} from '@nestjs/common';
import {PrincipalAbstractController} from '../principal/principal-controller';
import {ArtistaEntity} from './artista.entity';
import {ArtistaService} from './artista.service';
import {GeneroEntity} from '../genero/genero.entity';

@Controller('artista')
export class ArtistaController extends PrincipalAbstractController<ArtistaEntity> {
    constructor(private readonly _artistaService: ArtistaService,
    ) {
        super(_artistaService);
    }

    @Post('crear-artista-imagen-generos')
    @UseInterceptors(FileInterceptor('imagen'))
    async crearArtista(
        @UploadedFile() file,
        @Query() datosArtistaGeneros,
    ): Promise<ArtistaEntity> {
        try {
            datosArtistaGeneros = JSON.parse(datosArtistaGeneros.datosArtistaGeneros);
            return await this._artistaService.guardarArtistaImagen(
                datosArtistaGeneros.artista,
                datosArtistaGeneros.generos,
                datosArtistaGeneros.enlaces,

                file,
            );
        } catch (error) {
            console.error('Error al crear el artista', error);
            throw new BadRequestException('Error al crear el archivo');
        }
    }

    @Post('editar-artista-imagen-generos')
    @UseInterceptors(FileInterceptor('imagen'))
    async editarArtista(
        @UploadedFile() file,
        @Query() datosArtistaGeneros,
    ): Promise<ArtistaEntity> {
        try {
            datosArtistaGeneros = JSON.parse(datosArtistaGeneros.datosArtistaGeneros);
            delete datosArtistaGeneros.artista.imagen;
            delete datosArtistaGeneros.artista.enlacesArtista;
            delete datosArtistaGeneros.artista.generos;
            return await this._artistaService.editarArtistaImagen(
                datosArtistaGeneros.artista,
                datosArtistaGeneros.generos,
                datosArtistaGeneros.enlaces,
                datosArtistaGeneros.idArtista,
                datosArtistaGeneros.idImagen,
                file,
            );
        } catch (error) {
            console.error('Error al editar el artista', error);
            throw new BadRequestException('Error al editar el archivo');
        }
    }

    @Get('artistas-por-genero')
    async obtenerArtistasPorGenero(
        @Query('datosConsulta') datosArtistasPorGenero) {
        const existeDatos = datosArtistasPorGenero;
        if (existeDatos) {
            return await this._artistaService.obtenerArtistasPorGenero(
                JSON.parse(datosArtistasPorGenero),
            );
        } else {
            throw new BadRequestException('No envía parámetros');
        }
    }
}
