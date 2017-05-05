import { ApplicationRef, ComponentFactoryResolver, Injector, ModuleWithProviders } from '@angular/core';
import { ModalService, ModalServiceConfig } from './module/modal.service';
export declare class ModalModule {
    static forRoot(config: ModalServiceConfig): ModuleWithProviders;
}
export declare function modalServiceFactory(resolver: ComponentFactoryResolver, applicationRef: ApplicationRef, injector: Injector, options: ModalServiceConfig): ModalService;
