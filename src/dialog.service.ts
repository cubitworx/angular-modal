import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector, Optional } from '@angular/core';
import { Observable } from 'rxjs';

// Local
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

@Injectable()
export class DialogService extends ModalService {

	constructor(
		resolver: ComponentFactoryResolver,
		applicationRef: ApplicationRef,
		injector: Injector,
		@Optional() config: ModalServiceConfig
	) {
		super( resolver, applicationRef, injector, config );
	}

	public open(options: DialogOptions): Observable<number> {
		return super.open( options );
	}

}
