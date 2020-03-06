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

  private _activeNumber: number;

  @Input()
  get activeNumber(): number { return this._activeNumber; }
  set activeNumber(value: number) {
    this._activeNumber = value;

    this.setActivePanel();
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.setActivePanel();

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

  private setActivePanel() {
    if (this.activeNumber) {
      if (this.panels) {
        this.panels.forEach(elem => elem.showAccordion = false);

        this.panels.toArray()[this.activeNumber - 1].showAccordion = true;
      }
    }
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
