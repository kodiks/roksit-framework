import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'rk-select',
    templateUrl: 'rk-select.component.html',
    styleUrls: ['rk-select.component.scss']
})
export class RkSelectComponent implements OnInit {

    constructor() { }

    @Input() options: RkSelectModel[];

    @Input() chooseText = 'Lütfen seçiniz';

    selectedIndex: number;

    selectedOption: RkSelectModel;

    itemsContainerHidden = true;

    ngOnInit() { }

    public selectOption(option: RkSelectModel, index: number) {
        this.selectedOption = option;
        this.selectedIndex = index;

        this.setItemsContainerHidden(false);
    }

    setItemsContainerHidden(hidden: boolean) {
        this.itemsContainerHidden = hidden;
    }

    setBackdrop(isAdding: boolean) {
        const appRoot = document.getElementsByTagName('app-root');

        if (isAdding) {
            appRoot.item(0).innerHTML += `<div class="rk-backdrop"></div>`;

            appRoot.item(0).addEventListener('click', () => {
                this.setBackdrop(false);
            });
        } else {
            const backDrop = document.getElementsByClassName('rk-backdrop');

            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < backDrop.length; i++) {
                const element = backDrop[i];

                element.remove();
            }

        }
    }

}

export interface RkSelectModel {
    name?: string;
    displayText: string;
    value: string | number;
    selected?: boolean;
}
