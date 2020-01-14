

import { NgModule, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RkDateComponent } from './rk-date.component';
import { FormsModule } from '@angular/forms';
import { IconsModule } from '../icons/icons.module';

declare const $: any;

import flatpickr from 'flatpickr';
import { Turkish } from 'flatpickr/dist/l10n/tr';

Turkish.weekdays.shorthand = ['P', 'P', 'S', 'Ç', 'P', 'C', 'C'];

flatpickr.localize(Turkish);

import { FlatpickrModule } from 'angularx-flatpickr';
import { RkSelectModule } from '../rk-select/rk-select.module';

const DATE_PREV_ICON = `
    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" 
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 58 (84663) - https://sketch.com -->
        <title>feather-icon/circle-left</title>
        <desc>Created with Sketch.</desc>
        <g fill="#ccd4e0" id="feather-icon/circle-left" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M14.3939085,6.25105133 L9.25105133,11.3939085 C8.91631622,11.7286436 8.91631622,12.2713564 9.25105133,12.6060915 L14.3939085,17.7489487 C14.7286436,18.0836838 15.2713564,18.0836838 15.6060915,17.7489487 C15.9408266,17.4142136 15.9408266,16.8715007 15.6060915,16.5367656 L11.0693259,12 L15.6060915,7.46323438 C15.9408266,7.12849928 15.9408266,6.58578644 15.6060915,6.25105133 C15.2713564,5.91631622 14.7286436,5.91631622 14.3939085,6.25105133 Z" id="Combined-Shape" fill="#97A5BB"></path>
        </g>
    </svg>
`;

const DATE_NEXT_ICON = `
    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 58 (84663) - https://sketch.com -->
        <title>feather-icon/circle-right</title>
        <desc>Created with Sketch.</desc>
        <g fill="#ccd4e0" id="feather-icon/circle-right" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M9.25105133,6.25105133 C8.91631622,6.58578644 8.91631622,7.12849928 9.25105133,7.46323438 L13.7878169,12 L9.25105133,16.5367656 C8.91631622,16.8715007 8.91631622,17.4142136 9.25105133,17.7489487 C9.58578644,18.0836838 10.1284993,18.0836838 10.4632344,17.7489487 L15.6060915,12.6060915 C15.9408266,12.2713564 15.9408266,11.7286436 15.6060915,11.3939085 L10.4632344,6.25105133 C10.1284993,5.91631622 9.58578644,5.91631622 9.25105133,6.25105133 Z" id="Combined-Shape" fill="#97A5BB"></path>
        </g>
    </svg>
`;

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IconsModule,
        RkSelectModule,
        FlatpickrModule.forRoot({
            inline: true,
            prevArrow: DATE_PREV_ICON,
            nextArrow: DATE_NEXT_ICON
        })
    ],
    exports: [
        RkDateComponent
    ],
    declarations: [
        RkDateComponent
    ],
    providers: [],
})
export class RkDateModule { }
