"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearDatos = void 0;
const file_system_1 = require("file-system");
function crearDatos(servicio, rutaDatos) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const registrosParseados = JSON.parse(file_system_1.readFileSync(__dirname + rutaDatos, 'utf-8').toString());
            const respuesta = yield servicio.createMany(registrosParseados);
            return {
                data: respuesta,
                mensaje: 'Registros creados para' + rutaDatos
            };
        }
        catch (e) {
            console.error(e);
            throw new Error(JSON.stringify({ mensaje: 'Error creando registros', error: 500 }));
        }
    });
}
exports.crearDatos = crearDatos;
//# sourceMappingURL=crear-datos-prueba.js.map