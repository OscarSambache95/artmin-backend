import {
    Get,
    Body,
    Param,
    Post,
    Query,
    Delete,
    Put,
} from '@nestjs/common';

export abstract class PrincipalAbstractController<Entidad> {
    private readonly _servicio;

    constructor(servicio: any) {
        this._servicio = servicio;
    }

    @Get()
    async findAll(
        @Query('criterioBusqueda') criterioBusqueda,
    ): Promise<Entidad[]> {
        if (!criterioBusqueda) {
            return await this._servicio.find();
        }
        return await this._servicio.find(JSON.parse(criterioBusqueda));
    }

    @Get(':id')
    async findOne(@Param('id') id) {
        const respuesta = await this._servicio.findOne(id);
        return respuesta;
    }

    @Delete(':id')
    async delete(@Param('id') id) {
        return await this._servicio.delete(id);
    }

    @Post()
    async create(@Body() registro) {
        return await this._servicio.create(registro);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() registro) {
        return await this._servicio.findOneByIdAndUpdate(id, registro);
    }
}
