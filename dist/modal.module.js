"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
// Local
var dialog_component_1 = require("./dialog.component");
var dialog_service_1 = require("./dialog.service");
var modal_component_1 = require("./modal.component");
var modal_service_1 = require("./modal.service");
var ModalModule = ModalModule_1 = (function () {
    function ModalModule() {
    }
    ModalModule.forRoot = function (config) {
        return {
            ngModule: ModalModule_1,
            providers: [
                { provide: modal_service_1.ModalServiceConfig, useValue: config },
                {
                    provide: modal_service_1.ModalService,
                    useFactory: modalServiceFactory,
                    deps: [core_1.ComponentFactoryResolver, core_1.ApplicationRef, core_1.Injector, modal_service_1.ModalServiceConfig]
                }
            ]
        };
    };
    return ModalModule;
}());
ModalModule = ModalModule_1 = __decorate([
    core_1.NgModule({
        declarations: [
            dialog_component_1.DialogComponent,
            modal_component_1.ModalComponent
        ],
        exports: [
            dialog_component_1.DialogComponent,
            modal_component_1.ModalComponent
        ],
        imports: [
            platform_browser_1.BrowserModule
        ],
        providers: [
            dialog_service_1.DialogService,
            modal_service_1.ModalService
        ]
    })
], ModalModule);
exports.ModalModule = ModalModule;
function modalServiceFactory(resolver, applicationRef, injector, options) {
    return new modal_service_1.ModalService(resolver, applicationRef, injector, options);
}
exports.modalServiceFactory = modalServiceFactory;
var ModalModule_1;
//# sourceMappingURL=modal.module.js.map