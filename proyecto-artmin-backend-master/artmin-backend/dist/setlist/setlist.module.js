"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetlistModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const setlist_service_1 = require("./setlist.service");
const setlist_controller_1 = require("./setlist.controller");
const setlist_entity_1 = require("./setlist.entity");
let SetlistModule = class SetlistModule {
};
SetlistModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([setlist_entity_1.SetlistEntity], 'default')],
        controllers: [setlist_controller_1.SetlistController],
        providers: [setlist_service_1.SetlistService],
        exports: [setlist_service_1.SetlistService],
    })
], SetlistModule);
exports.SetlistModule = SetlistModule;
//# sourceMappingURL=setlist.module.js.map