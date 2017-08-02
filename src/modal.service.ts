import {
	ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector, Optional, Type
} from '@angular/core';
import { Observable } from 'rxjs';

// Local
import { ModalComponent } from './modal.component';

export interface ModalOptions {
	backdrop?: boolean|'static';
	class?: string;
	component?: Type<ModalComponent>;
	keyboard?: boolean;
	showClose?: boolean;
}

export class ModalServiceConfig {
	public container: HTMLElement = null;
}

@Injectable()
export class ModalService {

	protected _componentRef: ComponentRef<ModalComponent>;
	protected _container: HTMLElement;
	protected _modalComponent: ModalComponent;

	constructor(
		protected _resolver: ComponentFactoryResolver,
		protected _applicationRef: ApplicationRef,
		protected _injector: Injector,
		@Optional() config: ModalServiceConfig
	) {
		this._container = config && config.container;
	}

	public close(): void {
		if( !this._modalComponent )
			return;

		this._modalComponent.hide().first().subscribe(() => {
			this._componentRef.destroy();
		});
	}

	public open(options: ModalOptions): Observable<number> {
		if( !this._modalComponent )
			this._modalComponent = this._createModal( options );

		return this._modalComponent.show( options );
	}

	private _createModal(options: ModalOptions): ModalComponent {
		if( !this._container )
			this._container = document.body;
		if( !options.component )
			options.component = ModalComponent;

		let componentFactory = this._resolver.resolveComponentFactory( options.component );
		this._componentRef = componentFactory.create( this._injector );
		let componentRootNode = (<EmbeddedViewRef<any>>this._componentRef.hostView).rootNodes[0] as HTMLElement;

		this._applicationRef.attachView( this._componentRef.hostView );

		this._componentRef.onDestroy(() => {
		this._applicationRef.detachView( this._componentRef.hostView );
		});
		this._container.appendChild( componentRootNode );

		return this._componentRef.instance;
	}

}
