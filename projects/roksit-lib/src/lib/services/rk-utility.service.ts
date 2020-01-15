import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RkUtilityService {
    constructor() { }

    themeVars: Array<{ key, lightVal, darkVal }> = [
        { key: "cardBgColor", lightVal: "#f0f3f8", darkVal: "#262626" },
        { key: "titleColor", lightVal: "#445165", darkVal: "#f5f5f5" },
        { key: "bodyColor", lightVal: "white", darkVal: "black" }
    ]

    changeTheme(isDark: boolean = false) {
        this.themeVars.forEach(varItem => {
            document.documentElement.style.setProperty(`--${varItem.key}`, isDark ? varItem.darkVal : varItem.lightVal);
        });
    }
}
