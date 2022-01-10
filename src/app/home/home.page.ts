import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from 'src/utils/loader.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedCity = 'Rio de Janeiro';

  dailyWeather;
  hourlyWeather;

  constructor(
    private weatherService: WeatherService,
    private activatedRoute: ActivatedRoute,
    private loader: LoaderService
  ) { }

  ionViewWillEnter() {
    this.loader.hide();
    const result = this.activatedRoute.snapshot.data.value;
    if (result.status === 401) {
      this.loadFakeData();
    }
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  segmentChanged(ev: any) {
    this.selectedCity = ev.detail.value;
    this.loadData();
  }

  loadData(refreshLoader?) {
    //this.showLoader()
    if (!refreshLoader)
      this.loader.show();
    this.weatherService.loadData(this.selectedCity).subscribe(res => {
      console.log('data from service =========> ', res);
      if (res.status === 200) {
        this.hourlyWeather = res[0];
        this.dailyWeather = res[1];
      }
      refreshLoader ? refreshLoader.complete() : this.loader.hide();
    }, err => {
      refreshLoader ? refreshLoader.complete() : this.loader.hide();
    });
  }

  doRefresh(event) {
    this.loadData(event.target);
  }

  loadFakeData() {
    this.weatherService.loadFakeData().subscribe(res => {
      this.hourlyWeather = res[0];
      this.dailyWeather = res[1];
    });
  }

}
