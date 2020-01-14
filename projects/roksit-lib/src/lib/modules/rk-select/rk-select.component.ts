import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'rk-select',
    templateUrl: 'rk-select.component.html'
})
export class RkSelectComponent implements OnInit {

    constructor() { }

    @Input() options: RkSelectModel[];

    @Input() chooseText = 'Lütfen seçiniz';

    @Input() value;
    @Output() valueChange = new EventEmitter();

    selectedIndex: number;

    selectedOption: RkSelectModel;

    show = false;

    ngOnInit() { }

    public selectOption(option: RkSelectModel, index: number) {
        this.selectedOption = option;
        this.selectedIndex = index;

        this.valueChange.emit(option.value);

        this.setShow(false);
    }

    setShow(show: boolean) {
        this.show = show;
    }

}

export interface RkSelectModel {
    name?: string;
    displayText: string;
    value: string | number;
    selected?: boolean;
}
