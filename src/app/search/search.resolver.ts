import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Papa } from 'ngx-papaparse';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LoaderService } from 'src/utils/loader.service';
import { WeatherService } from '../services/weather.service';

@Injectable()
export class SearchResolver implements Resolve<any> {
    constructor(
        private weatherService: WeatherService,
        private loader: LoaderService,
        private papa: Papa
    ) { }


    resolve() {
        this.loader.show();
        return this.weatherService.loadCitiesList().pipe(map(res => {
            return this.papa.parse(res, { header: true, dynamicTyping: true });
        }), catchError(error => {
            return of('data not available at this time' + error);
        }));
    }
}
