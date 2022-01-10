import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.page.html',
  styleUrls: ['./daily-forecast.page.scss'],
})
export class DailyForecastPage implements OnInit {

  dailyWeather: any;
  @Input() set data(value: any) {
    this.dailyWeather = value;
  }
  get data(): any { return this.dailyWeather; }
  kelvinValue = 273.15;

  constructor() { }

  ngOnInit() {

  }

}
