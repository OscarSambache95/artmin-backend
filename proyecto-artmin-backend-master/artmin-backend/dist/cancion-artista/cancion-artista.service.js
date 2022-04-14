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
exports.CancionArtistaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const principal_service_1 = require("../principal/principal-service");
const cancion_artista_entity_1 = require("./cancion-artista.entity");
let CancionArtistaService = class CancionArtistaService extends principal_service_1.PrincipalService {
    constructor(_cancionArtistaRepository) {
        super(_cancionArtistaRepository, cancion_artista_entity_1.CancionArtistaEntity);
        this._cancionArtistaRepository = _cancionArtistaRepository;
    }
    guardarArtistasCancion(idCancion, idsArtistas) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuestaCancionesAntesEdicion = yield this.find({
                where: {
                    cancion: idCancion
                },
                relations: [
                    'artista',
                    'cancion'
                ]
            });
            const artistasCancionAntesEdicion = respuestaCancionesAntesEdicion[0];
            const cancionesArtistaACrear = [];
            let cancionesArtistaAEditar = artistasCancionAntesEdicion;
            idsArtistas
                .map((artista, indice) => {
                const artistasCancionCreado = artistasCancionAntesEdicion
                    .find(artistaCancion => {
                    return artistaCancion.artista.id === artista.id;
                });
                const esArtistaPrincipal = indice === 0 ? 1 : 0;
                if (!artistasCancionCreado) {
                    const artistaCancionACrear = {
                        esArtistaPrincipal,
                        artista: artista.id,
                        cancion: idCancion
                    };
                    cancionesArtistaACrear.push(artistaCancionACrear);
                }
            });
            yield this.createMany(cancionesArtistaACrear);
            const idArtistasAEliminar = [];
            yield cancionesArtistaAEditar
                .map((artistaCancion, indice) => __awaiter(this, void 0, void 0, function* () {
                const cancionArtistaGuardado = idsArtistas.find(artista => {
                    return artista.id === artistaCancion.artista.id;
                });
                if (!cancionArtistaGuardado) {
                    yield this.delete(artistaCancion.id);
                    idArtistasAEliminar.push(artistaCancion.id);
                }
                else {
                    artistaCancion.esArtistaPrincipal = cancionArtistaGuardado.esPrincipal;
                    yield this.findOneByIdAndUpdate(artistaCancion.id, artistaCancion);
                }
            }));
        });
    }
};
CancionArtistaService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(cancion_artista_entity_1.CancionArtistaEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CancionArtistaService);
exports.CancionArtistaService = CancionArtistaService;
//# sourceMappingURL=cancion-artista.service.js.map