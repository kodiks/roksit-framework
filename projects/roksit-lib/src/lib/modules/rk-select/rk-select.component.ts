import { Component, OnInit, Input, ViewChild, Self } from '@angular/core';
import * as $ from 'jquery';
import { NgModel, NG_VALUE_ACCESSOR, NgControl, ControlValueAccessor } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'rk-select',
    templateUrl: 'rk-select.component.html',
    styleUrls: ['rk-select.component.scss'],
    // providers: [{
    //     provide: NG_VALUE_ACCESSOR,
    //     useExisting: RkSelectComponent,
    //     multi: true,
    // }],
})
export class RkSelectComponent implements OnInit, ControlValueAccessor {

    constructor(
        @Self() public controlDir: NgControl
    ) {
        controlDir.valueAccessor = this;
    }

    @Input() options: RkSelectModel[];

    @Input() disabled: boolean;

    @Input() chooseText = 'Lütfen seçiniz';

    @Input() icon: string;

    selectedIndex: number;

    selectedOption: RkSelectModel;

    itemsContainerHidden = true;

    @ViewChild(NgModel, { static: false }) model: NgModel;

    private onChange: (value: string) => void;

    private onTouched: (value: string) => void;

    private valueChanges: Subscription;

    ngOnInit() {
        console.log(this.model);
    }

    public selectOption(option: RkSelectModel, index: number) {
        this.writeValue(option);

        this.selectedIndex = index;

        this.setItemsContainerHidden(false);
    }

    setItemsContainerHidden(hidden: boolean) {
        if (!this.disabled) {
            this.itemsContainerHidden = hidden;
        }
    }

    setBackdrop(isAdding: boolean) {
        const appRoot = $('app-root');

        if (isAdding) {
            appRoot.append(`<div class="rk-backdrop"></div>`);

            $('.rk-backdrop').remove();

            this.setItemsContainerHidden(false);
        } else {
            $('.rk-backdrop').remove();
        }
    }

    writeValue(obj: any): void {
        this.selectedOption = obj;
    }
    registerOnChange(fn: () => void): void {
        // throw new Error("Method not implemented.");
    }
    registerOnTouched(fn: () => void): void {
        // throw new Error("Method not implemented.");
    }
    setDisabledState?(isDisabled: boolean): void {
        // throw new Error("Method not implemented.");
    }

}

export interface RkSelectModel {
    name?: string;
    displayText: string;
    value: string | number;
    selected?: boolean;
}
