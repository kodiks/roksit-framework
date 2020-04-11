import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ThemeColor = 'light' | 'dark';

@Injectable({
    providedIn: 'root'
})
export class RkUtilityService {

    private themeColorSubject = new BehaviorSubject<ThemeColor>('light');
    themeColor = this.themeColorSubject.asObservable();

    themeVars: Array<{ key, lightVal, darkVal }> = [
        { key: 'primary', lightVal: '#507df3', darkVal: '#507df3' },
        { key: 'primary-1', lightVal: 'rgba(80, 126, 243, 0.1)', darkVal: 'rgba(80, 126, 243, 0.1)' },
        { key: 'primary-8', lightVal: 'rgba(80, 126, 243, 0.8)', darkVal: 'rgba(80, 126, 243, 0.8)' },
        { key: 'primary-9', lightVal: 'rgba(80, 126, 243, 0.9)', darkVal: 'rgba(80, 126, 243, 0.9)' },
        { key: 'primary-box-shadow', lightVal: 'rgba(51, 151, 197, 0.3)', darkVal: '0 10px 15px 0 rgba(0, 0, 0, 0.3)' },
        { key: 'primary-light-200', lightVal: '#bdeaff', darkVal: '#bdeaff' },
        { key: 'primary-light-200', lightVal: '#eaf4f9', darkVal: '#eaf4f9' },
        { key: 'security', lightVal: '#f95656', darkVal: '#f95656' },
        { key: 'harmful', lightVal: '#f9df56', darkVal: '#f9df56' },
        { key: 'safe', lightVal: '#3dd49a', darkVal: '#3dd49a' },
        { key: 'safe-hover', lightVal: '#359e76', darkVal: '#359e76' },
        { key: 'grey', lightVal: '#d8d8d8', darkVal: '#d8d8d8' },
        { key: 'unsafe', lightVal: '#f99256', darkVal: '#f99256' },
        { key: 'total', lightVal: '#4353ff', darkVal: '#4353ff' },
        { key: 'gray', lightVal: '#445165', darkVal: '#b2b2b2' },
        { key: 'gray-2', lightVal: 'rgba(68, 81, 101, 0.2)', darkVal: 'rgba(68, 81, 101, 0.2)' },
        { key: 'gray-5', lightVal: 'rgba(68, 81, 101, 0.5)', darkVal: 'rgba(68, 81, 101, 0.5)' },
        { key: 'gray-8', lightVal: 'rgba(68, 81, 101, 0.8)', darkVal: 'rgba(68, 81, 101, 0.8)' },
        { key: 'light-grey', lightVal: '#898ea4', darkVal: '#898ea4' },
        { key: 'blue-grey', lightVal: '#97a5bb', darkVal: '#97a5bb' },
        { key: 'blue-grey-darken', lightVal: '#696e77', darkVal: '#696e77' },
        { key: 'blue-grey-5', lightVal: 'rgba(151, 165, 187, 0.5)', darkVal: 'rgba(151, 165, 187, 0.5)' },
        { key: 'light-blue-grey', lightVal: '#ccd4e0', darkVal: '#2b2c31' },
        { key: 'light-blue-grey-2', lightVal: 'rgba(204, 212, 224, 0.2)', darkVal: 'rgba(204, 212, 224, 0.2)' },
        { key: 'light-blue-grey-5', lightVal: 'rgba(204, 212, 224, 0.5)', darkVal: 'rgba(204, 212, 224, 0.5)' },
        { key: 'pale-gray', lightVal: '#f0f3f8', darkVal: '#222327' },
        { key: 'pale-gray-5', lightVal: 'rgba(240, 243, 248, 0.5)', darkVal: '#1c1d20' },
        { key: 'white', lightVal: '#ffffff', darkVal: '#1c1d20' },
        { key: 'text-light', lightVal: '#ffffff', darkVal: '#ffffff' },
        { key: 'disabled', lightVal: 'rgba(68, 81, 101, 0.1)', darkVal: 'rgba(68, 81, 101, 0.1)' },
        { key: 'text-dark', lightVal: '#303759', darkVal: '#ffffff' },
        { key: 'base-light-color', lightVal: '#e4e9f1', darkVal: '#e4e9f1' },
        { key: 'body-bg', lightVal: '#ffffff', darkVal: '#222327' },
        { key: 'card-bg', lightVal: '#f0f3f8', darkVal: '#1c1d20' },
        { key: 'infobox-bg', lightVal: '#ffffff', darkVal: '#222327' },
        { key: 'infobox-border', lightVal: '#e4e9f1', darkVal: '#2b2c31' },
        { key: 'title-color', lightVal: '#445165', darkVal: '#ffffff' },
        { key: 'base-border-color', lightVal: '#ccd4e0', darkVal: '#222327' },
        { key: 'base-input-color', lightVal: '#ffffff', darkVal: '#222327' },
        { key: 'table-bg', lightVal: '#ffffff', darkVal: '#222327' },
        { key: 'table-header-bg', lightVal: '#f9f9fa', darkVal: '#222327' },
        { key: 'table-border', lightVal: '#eeeff2', darkVal: '#2d2d33' },
        { key: 'chart-info-bg', lightVal: '#f0f3f8', darkVal: '#1c1d20' },
        { key: 'collapse-active', lightVal: 'rgba(240, 243, 248, 0.5)', darkVal: '#2d2d33' },
        { key: 'modal-footer', lightVal: 'rgba(80, 126, 243, 0.8)', darkVal: '#2d2d33' }
    ];

    changeTheme(isDark: boolean = false) {
        this.themeVars.forEach(varItem => {
            document.documentElement.style.setProperty(`--${varItem.key}`, isDark ? varItem.darkVal : varItem.lightVal);
        });

        this.themeColorSubject.next(isDark ? 'dark' : 'light');
    }
}
