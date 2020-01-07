import { Component, OnInit, Input, ContentChildren, QueryList, AfterContentInit, AfterViewChecked, TemplateRef, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'rk-table',
  templateUrl: 'rk-table.component.html',
  styleUrls: ['rk-table.component.scss']
})

export class RkTableComponent implements OnInit, AfterContentInit, AfterViewChecked {
  @Input("hTemp") headerTemplate: TemplateRef<any>;
  @Input("bTemp") bodyTemplate: TemplateRef<any>;
  @Input() showPagination: boolean = true;
  @Output() pageChange: EventEmitter<number> = new EventEmitter();
  @Output() pageViewCountChange: EventEmitter<number> = new EventEmitter();

  pageChangeSub: Subscription;

  constructor() {

  }

  ngOnInit() { }

  ngAfterContentInit() {

  }

  ngAfterViewChecked() {

  }

  onPageChange(pageNumber: number) {
    this.pageChange.emit(pageNumber);
  }

  onPageViewCountChange(count: number) {
    this.pageViewCountChange.emit(count);
  }
}
