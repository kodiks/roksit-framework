import { Component } from '@angular/core';
import { RkSelectModel } from 'projects/roksit-lib/src/lib/modules/rk-select/rk-select.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'roksit-tester';

  options: any[] = [
    {
      id: 'opt1',
      text: 'Options 1'
    },
    {
      id: 'opt2',
      text: 'Options 2'
    },
    {
      id: 'opt3',
      text: 'Options 3'
    },
    {
      id: 'opt4',
      text: 'Options 4'
    }
  ];
}
