import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RkMenuItem } from '../models/rk-menu.model';

@Injectable({
    providedIn: 'root'
})
export class RkLayoutService {

    constructor() { }

    private sidebarCollapsedSubject = new BehaviorSubject<boolean>(false);
    public sidebarCollapsed = this.sidebarCollapsedSubject.asObservable();

    private activeListItemSubject = new BehaviorSubject<RkMenuItem>({} as RkMenuItem);
    public activeListItem = this.activeListItemSubject.asObservable();

    public setSidebarCollapse(collapsed: boolean) {
        this.sidebarCollapsedSubject.next(collapsed);
    }

    public setActiveListItem(listItem: RkMenuItem) {
        this.activeListItemSubject.next(listItem);
    }

}
