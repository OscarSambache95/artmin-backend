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
exports.TourService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const principal_service_1 = require("../principal/principal-service");
const tour_entity_1 = require("./tour.entity");
const imagen_service_1 = require("../imagen/imagen.service");
const artista_tour_service_1 = require("../artista-tour/artista-tour.service");
let TourService = class TourService extends principal_service_1.PrincipalService {
    constructor(_tourRepository, _imagenService, _artistaTourService) {
        super(_tourRepository, tour_entity_1.TourEntity);
        this._tourRepository = _tourRepository;
        this._imagenService = _imagenService;
        this._artistaTourService = _artistaTourService;
    }
    obtenerTourPorArtistasTipo(datosConsultaTours) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryBuilder = yield typeorm_2.getRepository(tour_entity_1.TourEntity)
                .createQueryBuilder('tour')
                .innerJoinAndSelect('tour.imagenesTour', 'imagenTour')
                .innerJoin('tour.artistasTour', 'artistaTour')
                .innerJoin('artistaTour.artista', 'artista')
                .andWhere('imagenTour.esPrincipal = :esPrincipal', { esPrincipal: datosConsultaTours.esImagenPrincipal });
            if (datosConsultaTours.busqueda) {
                queryBuilder
                    .andWhere('tour.nombre LIKE :busqueda', { busqueda: `%${datosConsultaTours.busqueda}%` });
            }
            if (datosConsultaTours.tipo) {
                queryBuilder
                    .andWhere('tour.tipo = :tipo', { tipo: datosConsultaTours.tipo });
            }
            if (datosConsultaTours.idArtista) {
                queryBuilder
                    .andWhere('artista.id = :idArtista', { idArtista: datosConsultaTours.idArtista });
            }
            return yield queryBuilder
                .orderBy('tour.id', 'DESC')
                .getManyAndCount();
        });
    }
    guardarTour(tour, imagenFile) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let tourCreadoEditado;
                const artistas = [...tour.artistas];
                if (tour.id) {
                    delete tour.artistas;
                    delete tour.imagen;
                    delete tour.artistasTour;
                    tourCreadoEditado = yield this.findOneByIdAndUpdate(tour.id, Object.assign({}, tour));
                }
                else {
                    tourCreadoEditado = yield this.create(Object.assign({}, tour));
                }
                if (tourCreadoEditado) {
                    if (tour.id) {
                        const imagenEncontrada = yield this._imagenService.findOne({
                            where: {
                                tour: tour.id,
                                esPrincipal: 1,
                            },
                        });
                        if (imagenFile) {
                            yield this._imagenService.guardarImagen(imagenFile, 'tour', 1, tourCreadoEditado.id, imagenEncontrada.url, imagenEncontrada.id);
                        }
                        yield this._artistaTourService.guardarArtistasTour(tour.id, artistas);
                    }
                    else {
                        yield this._imagenService.guardarImagen(imagenFile, 'tour', 1, tourCreadoEditado.id, '');
                        const artistasTour = artistas.map((idArtista) => {
                            const artistasTourACrear = {
                                artista: idArtista,
                                tour: tourCreadoEditado.id,
                            };
                            return artistasTourACrear;
                        });
                        yield this._artistaTourService.createMany(artistasTour);
                    }
                    const consulta = {
                        where: {
                            id: tourCreadoEditado.id,
                        },
                        relations: [
                            'imagenesTour',
                            'artistasTour',
                            'artistasTour.artista',
                        ],
                    };
                    return yield this.findOne(consulta);
                }
            }
            catch (e) {
                console.error(e);
                throw new common_1.BadRequestException(e);
            }
        });
    }
};
TourService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(tour_entity_1.TourEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        imagen_service_1.ImagenService,
        artista_tour_service_1.ArtistaTourService])
], TourService);
exports.TourService = TourService;
//# sourceMappingURL=tour.service.js.map