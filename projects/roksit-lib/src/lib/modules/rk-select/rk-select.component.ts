import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export type SelectDirection = 'up' | 'down';

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
            } else {
                this.selectedOption = null;
            }
        }
    }

    @Input() grouped = false;

    @Input() placeholder = 'Lütfen seçiniz';

    @Input() value;
    @Output() valueChange = new EventEmitter();

    @Input() isSearchable = false;

    @Input() searchTerm = '';

    @Input() searchPlaceholder = '...';

    @Input() isShowButton = false;

    @Input() buttonText: string;

    @Input() buttonIcon: string;

    @Input() direction: SelectDirection = 'down';

    @Input() buttonCallback: () => {};

    @Output() buttonClickEmitter = new EventEmitter();

    selectedIndex: number;

    selectedGroupIndex: number;

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

    public selectOption(option: RkSelectModel, index: number, groupIndex?: number) {
        this.selectedOption = option;
        this.selectedIndex = index;
        this.selectedGroupIndex = groupIndex;

        this.valueChange.emit(option.value);

        this.setShow(false);

        if (this.isSearchable) {
            this.searchTerm = '';
        }
    }

    setShow(show: boolean) {
        this.show = show;
    }

    buttonClick() {
        if (this.buttonCallback) {
            this.buttonCallback();
        } else {
            this.buttonClickEmitter.emit({
                clicked: true
            });
        }

        this.setShow(false);
    }
}

export interface RkSelectModel {
    name?: string;
    displayText: string;
    value?: string | number;
    selected?: boolean;

    groupItems?: RkSelectModel[];

    /**
     * @description Feather Icon
     */
    icon?: string;
    styles?: any;
}
