import { Component, OnInit, Input, TemplateRef, Output, EventEmitter, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'rk-table',
  templateUrl: 'rk-table.component.html',
  styleUrls: ['rk-table.component.scss']
})
export class RkTableComponent implements OnInit {

  @Input() showPagination = true;

  @Input() info = false;

  @Input() config: RkTableConfigModel;

  @Output() pageChange: EventEmitter<number> = new EventEmitter();

  @Output() pageViewCountChange: EventEmitter<number> = new EventEmitter();

  @ContentChild('header', { static: false }) header: TemplateRef<ElementRef>;

  @ContentChild('body', { static: true }) body: TemplateRef<ElementRef>;

  ngOnInit() { }

  onPageChange(pageNumber: number) {
    this.pageChange.emit(pageNumber);
  }

  onPageViewCountChange(count: number) {
    this.pageViewCountChange.emit(count);
  }

  getColumnNameByIndex(col: RkTableColumnModel): string {
    const column = this.config.columns.find(x => x.name === col.name);

    return column.name;
  }
}

export class RkTableConfigModel {
  rows: RkTableRowModel[] | any[];
  columns: RkTableColumnModel[];
  selectableRows = false;
}

export interface RkTableColumnModel {
  id?: number;
  name: string;
  displayText: string;
}

export interface RkTableRowModel {
  selected: false;
}
