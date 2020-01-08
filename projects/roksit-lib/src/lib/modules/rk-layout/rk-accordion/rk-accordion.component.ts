import { Component, OnInit, Input, ContentChildren, QueryList, AfterContentInit, AfterViewChecked, TemplateRef, Output, EventEmitter, OnChanges, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RkAccordionPanelComponent } from './rk-accordion-panel.component';


@Component({
  selector: 'rk-accordion',
  templateUrl: 'rk-accordion.component.html',
  styleUrls: ['rk-accordion.component.scss']
})

export class RkAccordionComponent implements OnInit, OnChanges, AfterViewInit {
  @ContentChildren(RkAccordionPanelComponent) panels: QueryList<RkAccordionPanelComponent>;

  constructor() {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.panels.toArray().forEach(component => {
      component.panelClickEvent.subscribe(comp => {
        var status = comp.showAccordion;

        this.panels.toArray().forEach(item => item.showAccordion = false);

        comp.showAccordion = !comp.showAccordion;
      });
    });
  }

  ngOnChanges() {
  }
}

export class RkListConfigModel {
  title: string;
  items: rkListItemModel[];
}

export class rkListItemModel {
  content: string;
  subContent: string;
  isShow?: boolean;
}