import { Component, OnInit, Input, ContentChildren, QueryList, AfterContentInit, AfterViewChecked, TemplateRef, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'rk-accordion-panel',
  templateUrl: 'rk-accordion-panel.component.html',
  styleUrls: ['rk-accordion-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class RkAccordionPanelComponent implements OnInit {
  @Input() index : number = 0;

  showAccordion: boolean = false;
  panelClickEvent: EventEmitter<RkAccordionPanelComponent> = new EventEmitter();

  ngOnInit() {

  }

  onPanelClick() {
      this.panelClickEvent.emit(this);
  }
}