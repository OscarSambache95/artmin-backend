import {readFileSync} from 'file-system'
import {PrincipalService} from '../principal/principal-service';

export async function crearDatos(
    servicio: PrincipalService<any> | any,
    rutaDatos: string,
) {
    try {
        const registrosParseados = JSON.parse(
            readFileSync(__dirname + rutaDatos, 'utf-8').toString(),
        );
        const respuesta = await servicio.createMany(registrosParseados);
        return {
            data: respuesta,
            mensaje: 'Registros creados para' + rutaDatos
        };
    } catch (e) {
        console.error(e);
        throw new Error(
            JSON.stringify({mensaje: 'Error creando registros', error: 500}),
        );
    }
}
