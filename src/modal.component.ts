import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as $ from 'jquery';

// Local
import { ModalOptions } from './modal.service';

@Component({
	selector: 'angular-modal',
	templateUrl: './modal.component.html'
})
export class ModalComponent {

	@ViewChild('angularModal') private _modal: ElementRef;

	protected _choiceSubject: Subject<number> = new Subject<number>();

	constructor(
		private _elementRef: ElementRef
	) { }

	public choose(choice: number): void {
		this._choiceSubject.next( choice );
	}

	public hide(): Observable<Event> {
		$(this._modal.nativeElement).modal('hide');

		return Observable.fromEvent(this._modal.nativeElement, 'hidden.bs.modal');
	}

	public show(options: ModalOptions): Observable<number> {
		$(this._modal.nativeElement)
			.modal({
				backdrop: options.backdrop || 'static',
				keyboard: options.keyboard || true,
				show: true
			})
			.on('shown.bs.modal', () => {
				$(this._elementRef.nativeElement).find('[autofocus]').focus();
			});

		return this._choiceSubject.asObservable();
	}

}
