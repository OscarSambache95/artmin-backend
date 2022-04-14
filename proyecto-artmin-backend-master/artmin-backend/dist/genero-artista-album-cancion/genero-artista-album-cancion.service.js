"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.GeneroArtistaAlbumCancionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const principal_service_1 = require("../principal/principal-service");
const genero_artista_album_cancion_entity_1 = require("./genero-artista-album-cancion.entity");
let GeneroArtistaAlbumCancionService = class GeneroArtistaAlbumCancionService extends principal_service_1.PrincipalService {
    constructor(_generoArtistaAlbumCancionRepository) {
        super(_generoArtistaAlbumCancionRepository, genero_artista_album_cancion_entity_1.GeneroArtistaAlbumCancionEntity);
        this._generoArtistaAlbumCancionRepository = _generoArtistaAlbumCancionRepository;
    }
    guardarGenerosPorArtistaAlbumCancion(entidad, idEntidad, idGeneros) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuestaGenerosAntesEdicion = yield this.find({
                where: {
                    [entidad]: idEntidad
                },
                relations: [
                    entidad,
                    'genero'
                ]
            });
            const generosArtistaAlbumCancionAntesEdicion = respuestaGenerosAntesEdicion[0];
            const generosArtistaACrear = idGeneros
                .map((genero) => {
                const generoArtistaAlbumCancionCreado = generosArtistaAlbumCancionAntesEdicion.find(generoArtistaAlbumCancion => {
                    return generoArtistaAlbumCancion.genero.id === genero;
                });
                if (!generoArtistaAlbumCancionCreado) {
                    return {
                        genero: genero,
                        [entidad]: idEntidad
                    };
                }
            })
                .filter(generoArtistaAlbumCancionFiltrados => generoArtistaAlbumCancionFiltrados);
            yield this.createMany(generosArtistaACrear);
            const idGenerosArtistaAEliminar = generosArtistaAlbumCancionAntesEdicion
                .map((generoArtistaAlbumCancion) => {
                const generoACrear = idGeneros.find(idGenero => {
                    return idGenero === generoArtistaAlbumCancion.genero.id;
                });
                if (!generoACrear) {
                    return generoArtistaAlbumCancion.id;
                }
            })
                .filter(idGenerosArtistaAlbumCancionAEliminar => idGenerosArtistaAlbumCancionAEliminar);
            if (idGenerosArtistaAEliminar && idGenerosArtistaAEliminar.length) {
                yield this.delete(idGenerosArtistaAEliminar);
            }
        });
    }
};
GeneroArtistaAlbumCancionService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(genero_artista_album_cancion_entity_1.GeneroArtistaAlbumCancionEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GeneroArtistaAlbumCancionService);
exports.GeneroArtistaAlbumCancionService = GeneroArtistaAlbumCancionService;
//# sourceMappingURL=genero-artista-album-cancion.service.js.map