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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// Local
var modal_component_1 = require("./modal.component");
var ModalServiceConfig = (function () {
    function ModalServiceConfig() {
        this.container = null;
    }
    return ModalServiceConfig;
}());
exports.ModalServiceConfig = ModalServiceConfig;
var ModalService = (function () {
    function ModalService(_resolver, _applicationRef, _injector, config) {
        this._resolver = _resolver;
        this._applicationRef = _applicationRef;
        this._injector = _injector;
        this._container = config && config.container;
    }
    ModalService.prototype.close = function () {
        var _this = this;
        if (!this._modalComponent)
            return;
        this._modalComponent.hide().first().subscribe(function () {
            _this._componentRef.destroy();
        });
    };
    ModalService.prototype.open = function (options) {
        if (!this._modalComponent)
            this._modalComponent = this._createModal(options);
        return this._modalComponent.show(options);
    };
    ModalService.prototype._createModal = function (options) {
        var _this = this;
        if (!this._container)
            this._container = document.body;
        if (!options.component)
            options.component = modal_component_1.ModalComponent;
        var componentFactory = this._resolver.resolveComponentFactory(options.component);
        this._componentRef = componentFactory.create(this._injector);
        var componentRootNode = this._componentRef.hostView.rootNodes[0];
        this._applicationRef.attachView(this._componentRef.hostView);
        this._componentRef.onDestroy(function () {
            _this._applicationRef.detachView(_this._componentRef.hostView);
        });
        this._container.appendChild(componentRootNode);
        return this._componentRef.instance;
    };
    return ModalService;
}());
ModalService = __decorate([
    core_1.Injectable(),
    __param(3, core_1.Optional()),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver,
        core_1.ApplicationRef,
        core_1.Injector,
        ModalServiceConfig])
], ModalService);
exports.ModalService = ModalService;
//# sourceMappingURL=modal.service.js.map