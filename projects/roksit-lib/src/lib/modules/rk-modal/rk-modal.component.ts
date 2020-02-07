import { Component, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'rk-modal',
    templateUrl: 'rk-modal.component.html'
})

export class RkModalComponent {

    constructor(
        private el: ElementRef<HTMLElement>
    ) { }

    @Output() close = new EventEmitter();

    toggle() {
        const rkModal = this.el.nativeElement.children.item(0);

        rkModal.classList.toggle('show');

        const rkModalBackdrop = this.el.nativeElement.children.item(1);

        rkModalBackdrop.classList.toggle('show');

        const show = rkModal.classList.contains('show');
        if (!show) {
            this.close.emit({
                closed: true
            });
        }
    }
}
