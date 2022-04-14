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
exports.AlbumArtistaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const principal_service_1 = require("../principal/principal-service");
const album_artista_entity_1 = require("./album-artista.entity");
let AlbumArtistaService = class AlbumArtistaService extends principal_service_1.PrincipalService {
    constructor(_albumArtistaRepository) {
        super(_albumArtistaRepository, album_artista_entity_1.AlbumArtistaEntity);
        this._albumArtistaRepository = _albumArtistaRepository;
    }
    guardarArtistasAlbumCancion(idAlbum, idsArtistas) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuestaAlbumesAntesEdicion = yield this.find({
                where: {
                    album: idAlbum,
                },
                relations: [
                    'artista',
                    'album',
                ],
            });
            const artistasAlbumAntesEdicion = respuestaAlbumesAntesEdicion[0];
            const albumesArtistaACrear = idsArtistas
                .map((idArtista) => {
                const artistasAlbumCreado = artistasAlbumAntesEdicion
                    .find(artistaAlbum => {
                    return artistaAlbum.artista.id === idArtista;
                });
                if (!artistasAlbumCreado) {
                    return {
                        artista: idArtista,
                        album: idAlbum,
                    };
                }
            })
                .filter(artistaAlbumFiltrados => artistaAlbumFiltrados);
            yield this.createMany(albumesArtistaACrear);
            const idArtistasAEliminar = artistasAlbumAntesEdicion
                .map((artistaAlbum) => {
                const albumACrear = idsArtistas.find(idArtista => {
                    return idArtista === artistaAlbum.artista.id;
                });
                if (!albumACrear) {
                    return artistaAlbum.id;
                }
            })
                .filter(idArtistaAlbumAEliminar => idArtistaAlbumAEliminar);
            if (idArtistasAEliminar && idArtistasAEliminar.length) {
                yield this.delete(idArtistasAEliminar);
            }
        });
    }
};
AlbumArtistaService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(album_artista_entity_1.AlbumArtistaEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AlbumArtistaService);
exports.AlbumArtistaService = AlbumArtistaService;
//# sourceMappingURL=album-artista.service.js.map