"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LanguagesModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var language_entity_1 = require("./language.entity");
var languages_list_controller_1 = require("./languages-list/languages-list.controller");
var LanguagesModule = /** @class */ (function () {
    function LanguagesModule() {
    }
    LanguagesModule = __decorate([
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forFeature([language_entity_1.languages])
            ],
            controllers: [languages_list_controller_1.LanguagesListController]
        })
    ], LanguagesModule);
    return LanguagesModule;
}());
exports.LanguagesModule = LanguagesModule;
