import { ApplicationRef, ComponentFactoryResolver, Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Local
import { DialogComponent } from './module/dialog.component';
import { DialogService } from './module/dialog.service';
import { ModalComponent } from './module/modal.component';
import { ModalService, ModalServiceConfig } from './module/modal.service';

@NgModule({
	declarations: [
		DialogComponent,
		ModalComponent
	],
	exports: [
		DialogComponent,
		ModalComponent
	],
	imports: [
		BrowserModule
	],
	providers: [
		DialogService,
		ModalService
	]
})
export class ModalModule {

	public static forRoot(config: ModalServiceConfig): ModuleWithProviders {
			return {
					ngModule: ModalModule,
					providers: [
							{ provide: ModalServiceConfig, useValue: config },
							{
									provide: ModalService,
									useFactory: modalServiceFactory,
									deps: [ComponentFactoryResolver, ApplicationRef, Injector, ModalServiceConfig]
							}
					]
			};
	}

}

export function modalServiceFactory(
	resolver: ComponentFactoryResolver,
	applicationRef: ApplicationRef,
	injector: Injector,
	options: ModalServiceConfig
) {
	return new ModalService(resolver, applicationRef, injector, options);
}
