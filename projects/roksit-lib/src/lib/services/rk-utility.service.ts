import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RkUtilityService {
    themeVars: Array<{ key, lightVal, darkVal }> = [
        { key: 'cardBgColor', lightVal: '#f0f3f8', darkVal: '#262626' },
        { key: 'titleColor', lightVal: '#445165', darkVal: '#f5f5f5' },
        { key: 'bodyColor', lightVal: '#ffffff', darkVal: '#000000' },
        { key: 'rkTitlecolor', lightVal: '#445165', darkVal: '#ffffff' },
    ];

    changeTheme(isDark: boolean = false) {
        this.themeVars.forEach(varItem => {
            document.documentElement.style.setProperty(`--${varItem.key}`, isDark ? varItem.darkVal : varItem.lightVal);
        });
    }
}
