"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagenModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const imagen_service_1 = require("./imagen.service");
const imagen_entity_1 = require("./imagen.entity");
const imagen_controller_1 = require("./imagen.controller");
const imagen_subscriber_1 = require("./imagen.subscriber");
let ImagenModule = class ImagenModule {
};
ImagenModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([imagen_entity_1.ImagenEntity], 'default')],
        controllers: [imagen_controller_1.ImagenController],
        providers: [
            imagen_service_1.ImagenService,
            imagen_subscriber_1.ImagenSubscriber
        ],
        exports: [imagen_service_1.ImagenService],
    })
], ImagenModule);
exports.ImagenModule = ImagenModule;
//# sourceMappingURL=imagen.module.js.map