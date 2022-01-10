import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.page.html',
  styleUrls: ['./hourly-forecast.page.scss'],
})
export class HourlyForecastPage implements OnInit {


  hourlyWeather: any;
  @Input() set data(value: any) {
    this.hourlyWeather = value;
  }
  kelvinValue = 273.15;
  get data(): any { return this.hourlyWeather; }

  constructor() { }

  ngOnInit() {

  }

}
