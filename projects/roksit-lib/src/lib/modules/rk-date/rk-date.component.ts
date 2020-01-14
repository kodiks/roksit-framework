import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';

declare const $: any;

@Component({
    selector: 'rk-date',
    templateUrl: 'rk-date.component.html'
})
export class RkDateComponent implements OnInit, AfterViewInit {

    constructor() { }

    @Input() startDate = new Date();
    startMinute = 0;
    startHour = 0;

    @Input() endDate = new Date();
    endMinute = 0;
    endHour = 0;

    // tslint:disable-next-line: no-output-native
    @Output() complete = new EventEmitter();

    ngOnInit() {
        this.setParametersByDates();
    }

    private setParametersByDates() {
        this.startMinute = this.startDate.getMinutes();
        this.startHour = this.startDate.getHours();

        this.endMinute = this.endDate.getMinutes();
        this.endHour = this.endDate.getHours();
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

    compelete() {
        this.complete.emit({
            startDate: this.startDate,
            endDate: this.endDate
        });
    }

    ngAfterViewInit() {
        $(function () {
            $('.cur-year').attr('type', 'text');
            $('.cur-year').attr('readonly', true);
        });
    }

}
