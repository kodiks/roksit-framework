import { Component } from '@angular/core';
import { RkSelectModel } from 'projects/roksit-lib/src/lib/modules/rk-select/rk-select.component';



interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'roksit-tester';

  countries = COUNTRIES;

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

  onPageChange(page: number) {
    this.countries = this.shuffle(this.countries);
  }

  onPageViewCountChange(pageViewCount: number) {
    this.countries = [];

    let i = 0;
    for (let index = 0; index < pageViewCount; index++) {
      if (index % 3 == 0)
        i = 0;

      this.countries.push(COUNTRIES[i]);
      i++;
    }
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}
