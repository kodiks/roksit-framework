import {
  Component, OnInit, Input, AfterContentInit, AfterViewChecked,
  TemplateRef, Output, EventEmitter, ElementRef, ContentChild
} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rk-table',
  templateUrl: 'rk-table.component.html',
  styleUrls: ['rk-table.component.scss']
})
export class RkTableComponent implements OnInit, AfterContentInit, AfterViewChecked {

  @Input() showPagination = true;

  @Output() pageChange: EventEmitter<number> = new EventEmitter();

  @Output() pageViewCountChange: EventEmitter<number> = new EventEmitter();

  @ContentChild('header', { static: false }) header: TemplateRef<ElementRef>;

  @ContentChild('body', { static: true }) body: TemplateRef<ElementRef>;

  pageChangeSub: Subscription;

  constructor() { }

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
