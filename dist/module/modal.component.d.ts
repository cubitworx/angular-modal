import { ElementRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ModalOptions } from './modal.service';
export declare class ModalComponent {
    private _elementRef;
    private _modal;
    protected _choiceSubject: Subject<number>;
    constructor(_elementRef: ElementRef);
    choose(choice: number): void;
    hide(): Observable<Event>;
    show(options: ModalOptions): Observable<number>;
}
