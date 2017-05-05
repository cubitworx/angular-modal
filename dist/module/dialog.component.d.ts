import { ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { DialogButton, DialogOptions } from './dialog.service';
import { ModalComponent } from './modal.component';
export declare class DialogComponent extends ModalComponent {
    static defaultButtons: DialogButton[];
    private _buttons;
    constructor(elementRef: ElementRef);
    show(options: DialogOptions): Observable<number>;
}
