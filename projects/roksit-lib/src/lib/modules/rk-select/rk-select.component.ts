import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'rk-select',
    templateUrl: 'rk-select.component.html'
})
export class RkSelectComponent implements OnInit {

    constructor() { }

    // tslint:disable-next-line: variable-name
    private _options: RkSelectModel[] = [];

    @Input()
    get options(): RkSelectModel[] { return this._options; }
    set options(options) {
        if (options) {
            this._options = options;

            const selected = options.find(x => x.selected);

            if (selected) {
                this.selectedOption = selected;
            }
        }
    }

    @Input() placeholder = 'Lütfen seçiniz';

    @Input() value;
    @Output() valueChange = new EventEmitter();

    @Input() isSearchable = false;

    @Input() searchTerm = '';

    @Input() searchPlaceholder = '...';

    selectedIndex: number;

    selectedOption: RkSelectModel;

    show = false;

    ngOnInit() {
        if (this.options) {
            const selected = this.options.find(x => x.selected);

            if (selected) {
                this.selectedOption = selected;
            }
        }
    }

    public selectOption(option: RkSelectModel, index: number) {
        this.selectedOption = option;
        this.selectedIndex = index;

        this.valueChange.emit(option.value);

        this.setShow(false);

        if (this.isSearchable) {
            this.searchTerm = '';
        }
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
