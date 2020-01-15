import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'rk-select',
    templateUrl: 'rk-select.component.html'
})
export class RkSelectComponent implements OnInit {

    constructor() { }

    @Input() options: RkSelectModel[];

    @Input() placeholder = 'Lütfen seçiniz';

    @Input() value;
    @Output() valueChange = new EventEmitter();

    selectedIndex: number;

    selectedOption: RkSelectModel;

    show = false;

    ngOnInit() {
        const selected = this.options.find(x => x.selected);

        if (selected) {
            this.selectedOption = selected;
        }
    }

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
