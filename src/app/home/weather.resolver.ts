import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoaderService } from 'src/utils/loader.service';
import { WeatherService } from '../services/weather.service';

@Injectable()
export class WeatherResolver implements Resolve<any> {
    constructor(
        private weatherService: WeatherService,
        private loader: LoaderService
    ) { }


    resolve() {
        this.loader.show();
        return this.weatherService.loadData('Rio de Janeiro').pipe(catchError(error => {
            return of('data not available at this time' + error);
        }));
    }
}
