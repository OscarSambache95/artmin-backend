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
exports.TipoAlbumController = void 0;
const common_1 = require("@nestjs/common");
const principal_controller_1 = require("../principal/principal-controller");
const tipo_album_service_1 = require("./tipo-album.service");
let TipoAlbumController = class TipoAlbumController extends principal_controller_1.PrincipalAbstractController {
    constructor(_tipoAlbumService) {
        super(_tipoAlbumService);
        this._tipoAlbumService = _tipoAlbumService;
    }
};
TipoAlbumController = __decorate([
    common_1.Controller('tipo-album'),
    __metadata("design:paramtypes", [tipo_album_service_1.TipoAlbumService])
], TipoAlbumController);
exports.TipoAlbumController = TipoAlbumController;
//# sourceMappingURL=tipo-album.controller.js.map