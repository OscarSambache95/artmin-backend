"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoVideoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tipo_video_service_1 = require("./tipo-video.service");
const tipo_video_entity_1 = require("./tipo-video.entity");
const tipo_video_controller_1 = require("./tipo-video.controller");
let TipoVideoModule = class TipoVideoModule {
};
TipoVideoModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([tipo_video_entity_1.TipoVideoEntity], 'default')],
        controllers: [tipo_video_controller_1.TipoVideoController],
        providers: [tipo_video_service_1.TipoVideoService],
        exports: [tipo_video_service_1.TipoVideoService],
    })
], TipoVideoModule);
exports.TipoVideoModule = TipoVideoModule;
//# sourceMappingURL=tipo-video.module.js.map