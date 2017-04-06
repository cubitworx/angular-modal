import { Component, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';

// Local
import { MODAL_BUTTON_CLOSE } from './buttons';
import { DialogButton, DialogOptions } from './dialog.service';
import { ModalComponent } from './modal.component';

@Component({
	selector: 'angular-dialog',
	templateUrl: './dialog.component.html'
})
export class DialogComponent extends ModalComponent {

	public static defaultButtons: DialogButton[] = [
		MODAL_BUTTON_CLOSE
	];

	private _buttons: DialogButton[] = [];

	constructor(
		elementRef: ElementRef
	) {
		super( elementRef );
	}

	public show(options: DialogOptions): Observable<number> {
		if( !options.buttons )
			this._buttons = DialogComponent.defaultButtons;
		this._buttons.reverse();

		return super.show( options );
	}

}
