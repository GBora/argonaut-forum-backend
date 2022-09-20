"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TranslateModule = void 0;
var common_1 = require("@nestjs/common");
var translate_service_1 = require("./translate/translate.service");
var TranslateModule = /** @class */ (function () {
    function TranslateModule() {
    }
    TranslateModule = __decorate([
        (0, common_1.Module)({
            providers: [translate_service_1.TranslateService],
            exports: [translate_service_1.TranslateService]
        })
    ], TranslateModule);
    return TranslateModule;
}());
exports.TranslateModule = TranslateModule;
