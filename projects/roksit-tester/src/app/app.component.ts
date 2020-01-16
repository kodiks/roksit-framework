import { Component } from '@angular/core';
import { RkListConfigModel } from 'projects/roksit-lib/src/lib/modules/rk-layout/rk-list/rk-list.component';
import { RkCardConfigModel } from 'projects/roksit-lib/src/lib/modules/rk-layout/rk-card/rk-card.component';
import { RkUtilityService } from 'projects/roksit-lib/src/public-api';
// import { RkAutoCompleteModel } from 'roksit-lib/lib/modules/rk-autocomplete/rk-autocomplete.component';

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
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
  /**  
   *
   */
  constructor(public utilityServie: RkUtilityService) {

  }

  darkMode: boolean = false;

  toggleDarkModel() {
    this.darkMode = !this.darkMode;

    this.utilityServie.changeTheme(this.darkMode);
  }

  title = 'roksit-tester';

  countries = COUNTRIES;

  options: any[] = [
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

  listConfig: RkListConfigModel = {
    title: 'Title',
    items: [{
      content: 'Lorem ipsum is placeholder text commonly used in the graphic',
      subContent: '20 minutes ago'
    }, {
      content: 'Lorem ipsum is placeholder text commonly used in the graphic',
      subContent: '20 minutes ago'
    }, {
      content: 'Lorem ipsum is placeholder text commonly used in the graphic',
      subContent: '20 minutes ago'
    }]
  };

  cardConfig: RkCardConfigModel = {
    header: {
      avatarUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      subTitle: 'Dog Breed',
      title: 'Shiba Inu'
    },
    body: {
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small,
      agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`
    }
  };

  autocompleteItems: any[] = [
    { text: 'Search Text 0', value: 'Search Text 0' },
    { text: 'Search Text 1', value: 'Search Text 1' },
    { text: 'Search Text 2', value: 'Search Text 2' },
    { text: 'Text 3 Search', value: 'Text 3 Search' },
    { text: 'Search 3 Text ', value: 'Search 3 Text' },
    { text: 'Text Search 3', value: 'Text Search 3' },
    { text: 'Search Text 4', value: 'Search Text 4' },
    { text: 'Search Text 6', value: 'Search Text 6' },
    { text: 'Search 1 Text', value: 'Search 1 Text' },
    { text: 'Search Text 3', value: 'Search Text 3' },
    { text: 'Search Text 0', value: 'Search Text 0' },
    { text: 'Search Text 1', value: 'Search Text 1' },
    { text: 'Search Text 2', value: 'Search Text 2' },
    { text: 'Text 3 Search', value: 'Text 3 Search' },
    { text: 'Search 3 Text ', value: 'Search 3 Text' },
    { text: 'Text Search 3', value: 'Text Search 3' },
    { text: 'Search Text 4', value: 'Search Text 4' },
    { text: 'Search Text 6', value: 'Search Text 6' },
    { text: 'Search 1 Text', value: 'Search 1 Text' },
    { text: 'Search Text 3', value: 'Search Text 3' },
  ];

  ss;

  onPageChange(page: number) {
    this.countries = this.shuffle(this.countries);
  }

  onPageViewCountChange(pageViewCount: number) {
    this.countries = [];

    let i = 0;
    for (let index = 0; index < pageViewCount; index++) {
      if (index % 3 === 0) {
        i = 0;
      }

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

  selectedChanged() {
    console.log('selected changed !!!!');
  }

  completed($event) {
    console.log($event);
  }
}
