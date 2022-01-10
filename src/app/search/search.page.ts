import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from 'src/utils/loader.service';
import { WeatherService } from '../services/weather.service';

interface City {
  city_id: number,
  city_name: string,
  country_code: string,
  country_full: string,
  lat: number,
  lon: number,
  state_code: string
}

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  dailyWeather;
  hourlyWeather;

  cities: City[] = [];
  hideSearchResult = true;
  public searchField: FormControl;

  constructor(
    private activatedRoute: ActivatedRoute,
    private loader: LoaderService,
    private weatherService: WeatherService
  ) {
    this.searchField = new FormControl('');
  }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.loader.hide();
    if (this.activatedRoute.snapshot.data.value && this.activatedRoute.snapshot.data.value.data) {
      this.cities = this.activatedRoute.snapshot.data.value.data;
      console.log('cities =====> ', this.cities)
    }

    this.searchField.valueChanges.subscribe(res => {
      this.hideSearchResult = false;
    });
  }
  
  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  loadData(cityName) {
    this.hideSearchResult = true;
    this.loader.show();
    this.weatherService.loadData(cityName).subscribe(res => {
      console.log('data from service =========> ', res);
      if (res.status === 200) {
        this.hourlyWeather = res[0];
        this.dailyWeather = res[1];
      } else {
        this.loadFakeData();
      }
      this.loader.hide();
    }, err => {
      this.loader.hide();
    });
  }

  loadFakeData() {
    this.weatherService.loadFakeData().subscribe(res => {
      this.hourlyWeather = res[0];
      this.dailyWeather = res[1];
    });
  }

}
