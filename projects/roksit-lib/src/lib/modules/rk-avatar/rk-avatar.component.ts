import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'rk-avatar',
    templateUrl: 'rk-avatar.component.html'
})

export class RkAvatarComponent implements OnInit {

    constructor() { }

    @Input() imgUrl: string;

    @Input() text: string;

    @Input() dropdownItems: RkDropdownItemModel[];

    show = false;

    ngOnInit() { }

    setShow(show: boolean) {
        this.show = show;
    }

    dropdownItemClick(dropdownItem: RkDropdownItemModel) {
        dropdownItem.callback();

        this.setShow(false);
    }

}

export interface RkDropdownItemModel {
    text: string;
    callback: () => {};
}
