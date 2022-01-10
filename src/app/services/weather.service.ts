import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { combineLatest, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  loadData(city: string) {
    const hourlyWeather = this.httpClient.get(`http://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${environment.weather_api_key}`);
    const dailyWeather = this.httpClient.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=5&appid=${environment.weather_api_key}`);
    return combineLatest([hourlyWeather, dailyWeather]).pipe(catchError(error => {
      return of(error);
    }));
  }

  loadCitiesList() {
    return this.httpClient.get('./assets/cities_20000.csv', { responseType: 'text' });
  }

  loadFakeData() {
    const hourlyWeather = this.httpClient.get('./assets/hourly_weather.json');
    const dailyWeather = this.httpClient.get('./assets/daily_weather.json');
    return combineLatest([hourlyWeather, dailyWeather]).pipe(catchError(error => {
      return of(error);
    }));
  }

}
