import { Component } from '@angular/core';
import { RkSelectModel } from 'projects/roksit-lib/src/lib/modules/rk-select/rk-select.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'roksit-tester';

  options: RkSelectModel[] = [
    { displayText: 'Text 1', value: 1 },
    { displayText: 'Text 2', value: 1 },
    { displayText: 'Text 3', value: 1 },
    { displayText: 'Text 4', value: 1 },
    { displayText: 'Text 6', value: 1 },
    { displayText: 'Text 7', value: 1 },
    { displayText: 'Text 8', value: 1 },
    { displayText: 'Text 9', value: 1 },
    { displayText: 'Text 10', value: 1 },
    { displayText: 'Text 11', value: 1 },
    { displayText: 'Text 12', value: 1 },
    { displayText: 'Text 13', value: 1 },
    { displayText: 'Text 14', value: 1 },
    { displayText: 'Text 15', value: 1 },
    { displayText: 'Text 16', value: 1 },
  ];
}
