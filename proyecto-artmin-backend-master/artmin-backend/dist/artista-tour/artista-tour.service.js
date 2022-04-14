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
exports.ArtistaTourService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const principal_service_1 = require("../principal/principal-service");
const artista_tour_entity_1 = require("./artista-tour.entity");
let ArtistaTourService = class ArtistaTourService extends principal_service_1.PrincipalService {
    constructor(_artistaTourRepository) {
        super(_artistaTourRepository, artista_tour_entity_1.ArtistaTourEntity);
        this._artistaTourRepository = _artistaTourRepository;
    }
    guardarArtistasTour(idTour, idsArtistas) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuestaTouresAntesEdicion = yield this.find({
                where: {
                    tour: idTour,
                },
                relations: [
                    'artista',
                    'tour',
                ],
            });
            const artistasTourAntesEdicion = respuestaTouresAntesEdicion[0];
            const touresArtistaACrear = idsArtistas
                .map((idArtista) => {
                const artistasTourCreado = artistasTourAntesEdicion
                    .find(artistaTour => {
                    return artistaTour.artista.id === idArtista;
                });
                if (!artistasTourCreado) {
                    return {
                        artista: idArtista,
                        tour: idTour,
                    };
                }
            })
                .filter(artistaTourFiltrados => artistaTourFiltrados);
            yield this.createMany(touresArtistaACrear);
            const idArtistasAEliminar = artistasTourAntesEdicion
                .map((artistaTour) => {
                const tourACrear = idsArtistas.find(idArtista => {
                    return idArtista === artistaTour.artista.id;
                });
                if (!tourACrear) {
                    return artistaTour.id;
                }
            })
                .filter(idArtistaTourAEliminar => idArtistaTourAEliminar);
            if (idArtistasAEliminar && idArtistasAEliminar.length) {
                yield this.delete(idArtistasAEliminar);
            }
        });
    }
};
ArtistaTourService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(artista_tour_entity_1.ArtistaTourEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ArtistaTourService);
exports.ArtistaTourService = ArtistaTourService;
//# sourceMappingURL=artista-tour.service.js.map