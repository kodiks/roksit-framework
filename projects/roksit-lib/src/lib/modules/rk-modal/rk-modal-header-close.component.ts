import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'rk-modal-header-close',
    template: `
        <div class="rk-modal-header-close">
            <button>
                <i-feather name="x-circle"></i-feather>
            </button>
        </div>
    `
})

export class RkModalHeaderCloseComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

}
