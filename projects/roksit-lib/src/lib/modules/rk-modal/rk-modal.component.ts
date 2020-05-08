import { Component, ElementRef, Output, EventEmitter, HostListener, Input } from '@angular/core';
import { KeyCodes } from '../../helpers/KeyCodes';

export interface RkModalModel {
    /**
     * @description Rk Modal toggle function
     */
    toggle(): void;
}

@Component({
    selector: 'rk-modal',
    templateUrl: 'rk-modal.component.html'
})

export class RkModalComponent implements RkModalModel {

    constructor(
        private el: ElementRef<HTMLElement>
    ) { }

    @Input() isLightBlueBg = false;

    @Input() className: string;

    @Output() close: EventEmitter<{ closed: boolean }> = new EventEmitter();

    @HostListener('window:keydown', ['$event'])
    keydown($event: KeyboardEvent) {
        if ($event.keyCode === KeyCodes.ESCAPE) {
            this.closeFunc();
        }
    }

    toggle() {
        const rkModal = this.el.nativeElement.children.item(0);

        rkModal.classList.toggle('show');

        const rkModalBackdrop = this.el.nativeElement.children.item(1);

        rkModalBackdrop.classList.toggle('show');

        document.body.classList.add('overflow-hidden');

        const show = rkModal.classList.contains('show');
        if (!show) {
            document.body.classList.remove('overflow-hidden');

            this.close.emit({
                closed: true
            });
        }
    }

    private closeFunc() {
        const rkModal = this.el.nativeElement.children.item(0);

        rkModal.classList.remove('show');

        const rkModalBackdrop = this.el.nativeElement.children.item(1);

        rkModalBackdrop.classList.remove('show');

        this.close.emit({
            closed: true
        });
    }
}
