import { ApplicationRef, ComponentFactoryResolver, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalOptions, ModalService, ModalServiceConfig } from './modal.service';
export interface DialogButton {
    choice: number;
    label: string;
    style?: string;
}
export interface DialogOptions extends ModalOptions {
    buttons?: DialogButton[];
    message?: string;
    title?: string;
}
export declare class DialogService extends ModalService {
    constructor(resolver: ComponentFactoryResolver, applicationRef: ApplicationRef, injector: Injector, config: ModalServiceConfig);
    open(options: DialogOptions): Observable<number>;
}
