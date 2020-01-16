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
  @Input() showPagination: boolean = true;
  @Input() info: boolean = false;
  @Input() config: RkTableConfigModel;

  @Output() pageChange: EventEmitter<number> = new EventEmitter();

  @Output() pageViewCountChange: EventEmitter<number> = new EventEmitter();

  @ContentChild('header', { static: false }) header: TemplateRef<ElementRef>;

  @ContentChild('body', { static: true }) body: TemplateRef<ElementRef>;


  ngOnInit() {
    this.config = new RkTableConfigModel();
    this.config.rows = [{ a: 1, b: 2, c: 3 }];
    this.config.columns = ["a", "b", "c"];
  }

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

export class RkTableConfigModel {
  rows: any[]
  columns: string[]
}


