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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const { getChart } = require('../node_modules/billboard-top-100');
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        console.log('hola');
        getChart((err, chart) => {
            if (err) {
                console.log(err);
            }
            console.log(chart);
            console.log(chart.week);
            console.log(chart.previousWeek.url);
            console.log(chart.previousWeek.date);
            console.log(chart.nextWeek.url);
            console.log(chart.nextWeek.date);
            console.log(chart.songs);
            console.log(chart.songs[3]);
            console.log(chart.songs[0].title);
            console.log(chart.songs[0].artist);
            console.log(chart.songs[0].rank);
            console.log(chart.songs[0].cover);
        });
        return this.appService.getHello();
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map