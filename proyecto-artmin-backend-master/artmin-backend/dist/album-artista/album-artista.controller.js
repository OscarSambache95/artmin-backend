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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumArtistaController = void 0;
const album_artista_service_1 = require("./album-artista.service");
const common_1 = require("@nestjs/common");
const principal_controller_1 = require("../principal/principal-controller");
let AlbumArtistaController = class AlbumArtistaController extends principal_controller_1.PrincipalAbstractController {
    constructor(_albumArtistaService) {
        super(_albumArtistaService);
        this._albumArtistaService = _albumArtistaService;
    }
};
AlbumArtistaController = __decorate([
    common_1.Controller('album-artista'),
    __metadata("design:paramtypes", [album_artista_service_1.AlbumArtistaService])
], AlbumArtistaController);
exports.AlbumArtistaController = AlbumArtistaController;
//# sourceMappingURL=album-artista.controller.js.map