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
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var $ = require("jquery");
var ModalComponent = (function () {
    function ModalComponent(_elementRef) {
        this._elementRef = _elementRef;
        this._choiceSubject = new rxjs_1.Subject();
    }
    ModalComponent.prototype.choose = function (choice) {
        this._choiceSubject.next(choice);
    };
    ModalComponent.prototype.hide = function () {
        $(this._modal.nativeElement).modal('hide');
        return rxjs_1.Observable.fromEvent(this._modal.nativeElement, 'hidden.bs.modal');
    };
    ModalComponent.prototype.show = function (options) {
        var _this = this;
        $(this._modal.nativeElement)
            .modal({
            backdrop: options.backdrop || 'static',
            keyboard: options.keyboard || true,
            show: true
        })
            .on('shown.bs.modal', function () {
            $(_this._elementRef.nativeElement).find('[autofocus]').focus();
        });
        return this._choiceSubject.asObservable();
    };
    return ModalComponent;
}());
__decorate([
    core_1.ViewChild('angularModal'),
    __metadata("design:type", core_1.ElementRef)
], ModalComponent.prototype, "_modal", void 0);
ModalComponent = __decorate([
    core_1.Component({
        selector: 'angular-modal',
        templateUrl: './modal.component.html'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ModalComponent);
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map