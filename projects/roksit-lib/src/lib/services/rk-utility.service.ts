import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RkUtilityService {

    themeVars: Array<{ key, lightVal, darkVal }> = [];

    changeTheme(isDark: boolean = false) {
        this.themeVars.forEach(varItem => {
            document.documentElement.style.setProperty(`--${varItem.key}`, isDark ? varItem.darkVal : varItem.lightVal);
        });
    }
}
