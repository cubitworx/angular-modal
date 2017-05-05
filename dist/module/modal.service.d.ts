import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injector, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalComponent } from './modal.component';
export interface ModalOptions {
    backdrop?: boolean | 'static';
    class?: string;
    component?: Type<ModalComponent>;
    keyboard?: boolean;
    showClose?: boolean;
}
export declare class ModalServiceConfig {
    container: HTMLElement;
}
export declare class ModalService {
    protected _resolver: ComponentFactoryResolver;
    protected _applicationRef: ApplicationRef;
    protected _injector: Injector;
    protected _componentRef: ComponentRef<ModalComponent>;
    protected _container: HTMLElement;
    protected _modalComponent: ModalComponent;
    constructor(_resolver: ComponentFactoryResolver, _applicationRef: ApplicationRef, _injector: Injector, config: ModalServiceConfig);
    close(): void;
    open(options: ModalOptions): Observable<number>;
    private _createModal(options);
}
