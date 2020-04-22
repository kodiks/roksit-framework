import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { RkSelectModel } from '../rk-select/rk-select.component';

declare const $: any;

const DEFAULT_TIMES = [
    { value: 60 * 1, displayText: '1 hour' },
    { value: 60 * 3, displayText: '3 hour' },
    { value: 60 * 6, displayText: '6 hour' },
    { value: 60 * 12, displayText: '12 hour' },
    { value: 60 * 24, displayText: 'Last 1 day' },
    { value: 60 * 24 * 2, displayText: 'Last 2 day' },
    { value: 60 * 24 * 3, displayText: 'Last 3 day' },
    { value: 60 * 24 * 7, displayText: 'Last 1 week' },
    { value: 60 * 24 * 14, displayText: 'Last 2 week' },
    { value: 60 * 24 * 30, displayText: 'Last month' },
    { value: 60 * 24 * 30 * 2, displayText: 'Last 2 month' }
] as RkDateTime[];

@Component({
    selector: 'rk-date',
    templateUrl: 'rk-date.component.html'
})
export class RkDateComponent implements OnInit, AfterViewInit {

    constructor() { }

    showContainer = false;

    @Input() startDate = new Date();
    startMinute = 0;
    startHour = 0;

    @Input() endDate = new Date();
    endMinute = 0;
    endHour = 0;

    @Input() alignment: 'left' | 'right' = 'left';

    @Input() times: RkDateTime[] = DEFAULT_TIMES;

    // tslint:disable-next-line: no-output-native
    @Output() complete = new EventEmitter();

    timeTypes = [
        { displayText: 'AM', value: 'AM', selected: true },
        { displayText: 'PM', value: 'PM' }
    ] as RkSelectModel[];

    ngOnInit() {
        this.setParametersByDates();
    }

    private setParametersByDates() {
        if (this.startDate && this.endDate) {
            this.startMinute = this.startDate.getMinutes();
            this.startHour = this.startDate.getHours();

            this.endMinute = this.endDate.getMinutes();
            this.endHour = this.endDate.getHours();
        }
    }

    /**
     * Start Date Minute
     * @param minute Minute
     */
    setStartMinute(minute: number) {
        if (minute >= 0 && minute < 60) {
            this.startMinute = minute;

            this.startDate = new Date(
                this.startDate.getFullYear(),
                this.startDate.getMonth(),
                this.startDate.getDate(),
                this.startDate.getHours(),
                minute
            );
        }
    }

    /**
     * Start Date Hour
     * @param hour Hour
     */
    setStartHour(hour: number) {
        if (hour >= 0 && hour < 24) {
            this.startHour = hour;

            this.startDate = new Date(
                this.startDate.getFullYear(),
                this.startDate.getMonth(),
                this.startDate.getDate(),
                hour,
                this.startDate.getMinutes()
            );
        }
    }

    /**
     * End Date Minute
     * @param minute Minute
     */
    setEndMinute(minute: number) {
        if (minute >= 0 && minute < 60) {
            this.endMinute = minute;

            this.endDate = new Date(
                this.endDate.getFullYear(),
                this.endDate.getMonth(),
                this.endDate.getDate(),
                this.endDate.getHours(),
                minute
            );
        }
    }

    /**
     * End Date Hour
     * @param hour Hour
     */
    setEndHour(hour: number) {
        if (hour >= 0 && hour < 24) {
            this.endHour = hour;

            this.endDate = new Date(
                this.endDate.getFullYear(),
                this.endDate.getMonth(),
                this.endDate.getDate(),
                hour,
                this.endDate.getMinutes()
            );
        }
    }

    changeStartDate() {
        this.setParametersByDates();
    }

    changeEndDate() {
        this.setParametersByDates();
    }

    setShowContainer(show: boolean) {
        this.showContainer = show;
    }

    compelete() {
        this.complete.emit({
            startDate: this.startDate,
            endDate: this.endDate
        });

        this.setShowContainer(false);
    }

    ngAfterViewInit() {
        $(function () {
            $('.cur-year').attr('type', 'text');
            $('.cur-year').attr('readonly', true);
        });
    }

    selectTime(time: RkDateTime, dates?: { startDate: Date, endDate: Date }) {
        this.times.forEach(_time => _time.selected = false);

        time.selected = true;

        const startDate = dates ? dates.startDate : new Date();
        const endDate = dates ? dates.endDate : new Date();

        if (!dates) {
            startDate.setMinutes(startDate.getMinutes() - time.value);
        }

        this.startDate = startDate;
        this.endDate = endDate;

        this.setParametersByDates();
    }

}

export interface RkDateTime {
    /**
     * @description Hour | Example: Last week => value: 24 * 7
     */
    value: number;

    /**
     * @description Display on text param
     */
    displayText: string;

    /**
     * @description For UI
     */
    selected?: boolean;
}
