import { Component, OnInit, Input, ContentChildren, QueryList, AfterContentInit, AfterViewChecked, TemplateRef, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'rk-list',
  templateUrl: 'rk-list.component.html',
  styleUrls: ['rk-list.component.scss']
})

export class RkListComponent implements OnInit { 
  @Input() config : RkListConfigModel = new RkListConfigModel();

  constructor() {

  }

  ngOnInit() {
    
  }
}

export class RkListConfigModel {
  title : string;
  items : rkListItemModel[];
}

export class rkListItemModel {
  content : string;
  subContent : string;
}