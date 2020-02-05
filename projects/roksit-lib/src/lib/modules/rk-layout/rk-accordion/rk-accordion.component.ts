import { Component, OnInit, ContentChildren, QueryList, AfterViewInit, Input } from '@angular/core';
import { RkAccordionPanelComponent } from './rk-accordion-panel.component';

@Component({
  selector: 'rk-accordion',
  templateUrl: 'rk-accordion.component.html',
})

export class RkAccordionComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ContentChildren(RkAccordionPanelComponent) panels: QueryList<RkAccordionPanelComponent>;

  @Input() isWizard: boolean;

  @Input() activeNumber: number;

  ngOnInit() { }

  ngAfterViewInit() {
    if (this.activeNumber) {
      this.panels.toArray()[this.activeNumber - 1].showAccordion = true;
    }

    this.panels.toArray().forEach(component => {
      component.panelClickEvent.subscribe((comp: RkAccordionPanelComponent) => {
        const status = comp.showAccordion;

        this.panels.toArray().forEach((item, index) => {
          item.showAccordion = false;

          if (this.isWizard) {
            item.passed = false;

            if (index < comp.index) {
              item.passed = true;
            }
          }

        });

        comp.showAccordion = !status;
      });
    });
  }
}

export class RkListConfigModel {
  title: string;
  items: RkListItemModel[];
}

export class RkListItemModel {
  content: string;
  subContent: string;
  isShow?: boolean;
}
