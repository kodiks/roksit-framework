import { Component, ViewChild, ElementRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
    selector: 'rk-modal',
    templateUrl: 'rk-modal.component.html'
})

export class RkModalComponent {

    constructor(
        private el: ElementRef
    ) { }

    toggle() {
        const rkModal = this.el.nativeElement.children.item(0);

        rkModal.classList.toggle('show');
    }

}
