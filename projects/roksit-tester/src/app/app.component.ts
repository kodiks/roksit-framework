import { Component, OnInit, ViewChild } from '@angular/core';
import { RkListConfigModel } from 'projects/roksit-lib/src/lib/modules/rk-layout/rk-list/rk-list.component';
import { RkCardConfigModel } from 'projects/roksit-lib/src/lib/modules/rk-layout/rk-card/rk-card.component';
import { RkApexHelper, RkLayoutService } from 'projects/roksit-lib/src/public-api';
import { RkTableConfigModel } from 'projects/roksit-lib/src/lib/modules/rk-table/rk-table/rk-table.component';
import { RkUtilityService } from 'projects/roksit-lib/src/lib/services/rk-utility.service';
import { RkMenuItem } from 'projects/roksit-lib/src/lib/models/rk-menu.model';
import { RkModalComponent } from 'projects/roksit-lib/src/lib/modules/rk-modal/rk-modal.component';
import { RkSelectModel } from 'projects/roksit-lib/src/lib/modules/rk-select/rk-select.component';
import { RkAutoCompleteModel } from 'projects/roksit-lib/src/lib/modules/rk-autocomplete/rk-autocomplete.component';

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
export class AppComponent implements OnInit {

  /**
   *
   */
  constructor(
    private rkUtilityService: RkUtilityService,
    private rkLayoutService: RkLayoutService
  ) {
    this.rkLayoutService.sidebarCollapsed.subscribe(collapsed => {
      this.collapsed = collapsed;
    });
  }
  filters: string[] = [];

  darkMode = false;

  // tslint:disable-next-line: variable-name
  __options: RkSelectModel[] = [
    { value: 32, displayText: '32', selected: true },
    { value: 33, displayText: '33' },
    { value: 34, displayText: '34', icon: 'plus' },
    { value: 35, displayText: '35', styles: { background: 'red' } },
    { value: 36, displayText: '36' }
  ];

  tableConfig: RkTableConfigModel = {
    columns: [
      { id: 0, name: 'time', displayText: 'Time', selected: true },
      { id: 1, name: 'domain', displayText: 'Domain', selected: true },
      { id: 2, name: 'subdomain', displayText: 'Subdomain', selected: true },
      { id: 3, name: 'srcip', displayText: 'Src.Ip', isLink: true },
      { id: 4, name: 'srccountry', displayText: 'Src. Country' },
      { id: 5, name: 'dstip', displayText: 'Dst.Ip', selected: true },
      { id: 6, name: 'dstcountry', displayText: 'Dst.Country', selected: true },
      { id: 7, name: 'location', displayText: 'Location/Agent' },
      { id: 8, name: 'userid', displayText: 'User Id' },
      { id: 9, name: 'action', displayText: 'Action' },
      { id: 10, name: 'app', displayText: 'Application' },
      { id: 11, name: 'cat', displayText: 'Category' }
    ],
    rows: [
      {
        selected: true, time: '20:04', domain: 'trafficmanager.net', subdomain: 'app.trafficmanager.net', srcip: '176.23.4.52',
        srccountry: 'Turkey', dstip: '142.45.23.231', dstcountry: 'America', location: 'X Agent', userid: 23, action: '-',
        app: 'TraManager', cat: 'Network'
      },
      {
        selected: false, time: '20:59', domain: 'example.com', subdomain: 'app.trafficmanager.net', srcip: '176.23.4.52',
        srccountry: 'Turkey', dstip: '142.45.23.231', dstcountry: 'England', location: 'X Agent', userid: 23, action: '-',
        app: 'TraManager', cat: 'Network'
      },
      {
        selected: true, time: '20:02', domain: 'example.net', subdomain: 'app.trafficmanager.net', srcip: '176.23.4.52',
        srccountry: 'Turkey', dstip: '142.45.23.231', dstcountry: 'Brasil', location: 'X Agent', userid: 23, action: '-',
        app: 'TraManager', cat: 'Network'
      },
      {
        selected: true, time: '20:39', domain: 'arnold.net', subdomain: 'app.trafficmanager.net', srcip: '176.23.4.52',
        srccountry: 'Turkey', dstip: '142.45.23.231', dstcountry: 'Turkey', location: 'X Agent', userid: 23, action: '-',
        app: 'TraManager', cat: 'Network'
      },
      {
        selected: false, time: '20:17', domain: 'trafficmanager.net', subdomain: 'app.trafficmanager.net', srcip: '176.23.4.52',
        srccountry: 'Turkey', dstip: '142.45.23.231', dstcountry: 'France', location: 'X Agent', userid: 23, action: '-',
        app: 'TraManager', cat: 'Network'
      },
    ],
    selectableRows: true
  };

  title = 'roksit-tester';

  countries = COUNTRIES;

  options: any[] = [
    { displayText: 'Text 1', value: 1 },
    { displayText: 'Text 2', value: 2 },
    { displayText: 'Text 3', value: 3 },
    { displayText: 'Text 4', value: 4 },
    { displayText: 'Text 6', value: 5 },
    { displayText: 'Text 7', value: 6 },
    { displayText: 'Text 8', value: 7 },
    { displayText: 'Text 9', value: 8 },
    { displayText: 'Text 10', value: 9 },
    { displayText: 'Text 11', value: 10 },
    { displayText: 'Text 12', value: 11 },
    { displayText: 'Text 13', value: 12 },
    { displayText: 'Text 14', value: 13 },
    { displayText: 'Text 15', value: 14 },
    { displayText: 'Text 16', value: 15 },
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

  menuItems: RkMenuItem[] = [
    { id: 0, path: '', text: 'Dashboard', icon: 'dashboard', selected: false },
    { id: 1, path: '', text: 'Monitor', icon: 'monitor', selected: false },
    { id: 2, path: '', text: 'Custom Reports', icon: 'custom-reports', selected: false },
    {
      id: 3, path: '', text: 'Deployment', icon: 'dashboard', selected: false,
      subMenu: [
        { id: 3.1, path: '', text: 'Public IP', icon: 'public-ip', selected: false },
        { id: 3.2, path: '', text: 'Devices', icon: 'device', selected: false },
        { id: 3.3, path: '', text: 'Roaming Clients', icon: 'roaming-clients', selected: false },
      ]
    },
    {
      id: 4, path: '', text: 'Settings', icon: 'settings', selected: false,
      subMenu: [
        { id: 4.1, path: '', text: 'User', icon: 'user', selected: false },
        { id: 4.2, path: '', text: 'Saved Reports', icon: 'saved-reports', selected: false },
        { id: 4.3, path: '', text: 'Security Profiles', icon: 'security-profiles', selected: false },
        { id: 4.4, path: '', text: 'Tools', icon: 'tools', selected: false },
        { id: 4.5, path: '', text: 'Request Changing Domain Category', icon: 'request-category', selected: false },
        { id: 4.6, path: '', text: 'Theme Mode', icon: 'theme-mode', selected: false },
      ]
    },
    { id: 5, path: '', text: 'Help', icon: 'help', selected: false }
  ];

  collapsed: boolean;

  @ViewChild('modal', { static: false }) modal: RkModalComponent;
  searchTerm: RkAutoCompleteModel = {
    text: '',
    value: ''
  } as RkAutoCompleteModel;

  toggleCollapse() {
    this.rkLayoutService.setSidebarCollapse(!this.collapsed);
  }

  selectedChange($event) {
    console.log($event);
  }

  setActive(menuItem: RkMenuItem, subMenuItem?: RkMenuItem) {
    this.menuItems.forEach(elem => elem.selected = false);

    menuItem.selected = true;

    this.menuItems.forEach(elem => {
      if (elem.subMenu) {
        elem.subMenu.forEach(subMenuElem => subMenuElem.selected = false);
      }
    });

    if (subMenuItem) {
      subMenuItem.selected = true;
    }
  }

  tableExportEvent($event) {
    console.log($event);
  }

  colorChanged($event: { color: 'white' | 'black' }) {
    console.log($event.color);
  }

  addFilter() {
    const filters = (JSON.parse(JSON.stringify(this.filters)) as string[]);

    filters.unshift(`category-${Date.now()}`);

    this.filters = filters;
  }

  private prepareTimelineChart() {
    function generateDayWiseTimeSeries(baseval, count, yrange) {
      let i = 0;
      const series = [];
      while (i < count) {
        const x = baseval;
        const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push([x, y]);
        baseval += 86400000;
        i++;
      }
      return series;
    }

    const data = generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 185, {
      min: 10,
      max: 500
    });

    RkApexHelper.render('#timeline', {
      series: [{
        data
      }],
      chart: {
        id: 'chart2',
        type: 'line',
        height: 350,
        toolbar: {
          autoSelected: 'pan',
          show: false
        }
      },
      markers: {
        size: 4,
        colors: ['#FFA41B'],
        strokeColors: '#FFA41B',
        strokeWidth: 2,
        hover: {
          size: 7,
        }
      },
      colors: ['#0084ff'],
      stroke: {
        width: 3
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: 1,
      },
      xaxis: {
        type: 'datetime'
      }
    });


    RkApexHelper.render('#timeline-chart', {
      series: [{
        data
      }],
      chart: {
        id: 'chart1',
        height: 120,
        type: 'bar',
        brush: {
          target: 'chart2',
          enabled: true
        },
        selection: {
          enabled: true,
          type: 'x',
          fill: {
            color: 'transparent',
            opacity: 0.1
          },
          stroke: {
            width: 4,
            color: '#97a5bb',
            opacity: 1,
            dashArray: 0,
            radius: 10
          },
          xaxis: {
            min: new Date('19 Jun 2017').getTime(),
            max: new Date('14 Aug 2017').getTime()
          },
        }
      },
      colors: [({ value, seriesIndex, w }) => {
        if (value < 55) {
          return '#f95656';
        } else if (value >= 55 && value < 80) {
          return '#3dd49a';
        } else {
          return '#f99256';
        }
      }],
      // colors: ['#f95656', '#3dd49a', '#f99256', '#f9df56', '#d8d8d8'],
      // fill: {
      //   type: 'gradient',
      //   gradient: {
      //     opacityFrom: 0.91,
      //     opacityTo: 0.1,
      //   }
      // },
      xaxis: {
        type: 'datetime',
        tooltip: {
          enabled: false
        }
      },
      yaxis: {
        tickAmount: 2
      }
    });
  }

  onValueChange(value: boolean) { }

  toggle() {
    this.modal.toggle();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.tableConfig.columns[0].selected = true;
    }, 100);
    // this.prepareTimelineChart();

    // RkApexHelper.render('#line-chart', {
    //   chart: {
    //     height: 250,
    //     type: 'line',
    //     zoom: {
    //       enabled: false
    //     },
    //     foreColor: '#9b9b9b',
    //     toolbar: {
    //       show: false,
    //       tools: {
    //         download: false
    //       }
    //     },
    //   },
    //   dataLabels: {
    //     enabled: false
    //   },
    //   stroke: {
    //     width: [4, 4],
    //     curve: 'smooth'
    //   },
    //   colors: ['#f95656'],
    //   series: [{
    //     name: 'Session Duration',
    //     data: [150, 100, 180, 400, 380, 550, 400]
    //   }
    //   ],
    //   markers: {
    //     size: 0,

    //     hover: {
    //       sizeOffset: 6
    //     }
    //   },
    //   xaxis: {
    //     categories: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12'],
    //     labels: {
    //       minHeight: 20
    //     }
    //   },
    //   tooltip: {
    //     y: [{
    //       title: {
    //         formatter(val) {
    //           return val + ' (mins)';
    //         }
    //       }
    //     }]
    //   },
    //   grid: {
    //     borderColor: '#e9ebf1'
    //   },
    //   legend: {
    //     show: false
    //   },
    //   annotations: {
    //     yaxis: [{
    //       label: {
    //         fontSize: '20px'
    //       }
    //     }]
    //   }
    // });
  }

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

  toggleDarkModel() {
    this.darkMode = !this.darkMode;

    this.rkUtilityService.changeTheme(this.darkMode);
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

  onSelect($event) {
    console.log($event);

    $event = { text: '', value: '' } as RkAutoCompleteModel;
  }
}
