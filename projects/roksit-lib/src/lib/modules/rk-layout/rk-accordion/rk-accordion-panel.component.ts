import { Component, OnInit, Input, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rk-accordion-panel',
  templateUrl: 'rk-accordion-panel.component.html',
  encapsulation: ViewEncapsulation.None
})

export class RkAccordionPanelComponent implements OnInit {

  constructor() { }

  @Input() index = 0;

  @Input() passed = false;

  showAccordion = false;
  panelClickEvent: EventEmitter<RkAccordionPanelComponent> = new EventEmitter();

  ngOnInit() { }

  onPanelClick() {
    this.panelClickEvent.emit(this);
  }
}
