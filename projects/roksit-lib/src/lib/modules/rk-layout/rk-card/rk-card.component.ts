import { Component, OnInit, Input, ContentChildren, QueryList, AfterContentInit, AfterViewChecked, TemplateRef, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'rk-card',
  templateUrl: 'rk-card.component.html',
  styleUrls: ['rk-card.component.scss']
})

export class RkCardComponent implements OnInit { 
  @Input() config : RkCardConfigModel = new RkCardConfigModel();

  constructor() {

  }

  ngOnInit() {
    
  }
}

export class RkCardConfigModel {
  header : rkCardHeaderModel;
  body : rkCardBodyModel;
}

export class rkCardHeaderModel {
  avatarUrl : string;
  title : string;
  subTitle : string;
}

export class rkCardBodyModel {
  imageUrl : string;
  content : string;
}