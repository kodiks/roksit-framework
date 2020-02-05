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

  @Input() totalCount = 0;

  @Input() pageViewCount = 0;

  @Input() currentPage = 1;

  @Input() maxSize = 8;

  @Output() pageChange: EventEmitter<number> = new EventEmitter();

  @Output() pageViewCountChange: EventEmitter<number> = new EventEmitter();

  @ContentChild('header', { static: false }) header: TemplateRef<ElementRef>;

  @ContentChild('body', { static: true }) body: TemplateRef<ElementRef>;

  @Output() selectedChange = new EventEmitter();

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

  valueChange($event, t) {
    this.config.rows.forEach(elem => {
      elem.selected = $event;
    });

    this.selectedChange.emit({
      statuses: $event,
      rows: this.config.rows
    });
  }

  selectedChanged($event, row) {
    this.selectedChange.emit({
      status: $event,
      rows: row
    });
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
  selected?: boolean;
}

export interface RkTableRowModel {
  selected: false;
}
