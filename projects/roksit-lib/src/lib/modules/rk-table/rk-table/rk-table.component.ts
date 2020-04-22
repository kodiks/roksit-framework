import { Component, OnInit, Input, TemplateRef, Output, EventEmitter, ElementRef, ContentChild } from '@angular/core';
import { RkSelectModel, SelectDirection } from '../../rk-select/rk-select.component';

export type SortType = 'desc' | 'asc';

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

  @Input() totalCountPlaceholder: number;

  @Input() pageViewCount = 0;

  @Input() currentPage = 1;

  @Input() maxSize = 8;

  @Input() tableHeight: number;

  @Input() paginationOptions: RkSelectModel[] = [
    { displayText: '10', value: 10, selected: true },
    { displayText: '25', value: 25 },
    { displayText: '50', value: 50 },
    { displayText: '100', value: 100 },
  ];

  @Input() paginationSelectDirection: SelectDirection = 'down';

  @Output() pageChange: EventEmitter<number> = new EventEmitter();

  @Output() pageViewCountChange: EventEmitter<number> = new EventEmitter();

  @ContentChild('header', { static: false }) header: TemplateRef<ElementRef>;

  @ContentChild('body', { static: true }) body: TemplateRef<ElementRef>;

  @Output() selectedChange = new EventEmitter();

  @Output() linkColumnClicked = new EventEmitter();

  sortDirection: SortType = 'asc';

  sortedColumn = '';

  isSorted = false;

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

  linkClicked(colModel: RkTableColumnModel, column: string) {
    this.linkColumnClicked.emit({
      columnModel: colModel,
      value: column
    });
  }

  sort(col: RkTableColumnModel) {
    this.isSorted = true;

    this.config.rows = this.config.rows.sort((a, b) => {
      return this.sortDirection === 'asc' ? (a[col.name] > b[col.name] ? 1 : -1) : (a[col.name] < b[col.name] ? 1 : -1);
    });

    this.sortedColumn = col.name;

    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
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
  isLink?: boolean;
  isProgress?: boolean;
}

export interface RkTableRowModel {
  selected: false;
  progressValue?: number;
}
