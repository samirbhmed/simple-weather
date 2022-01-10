import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import { FilterCitiesPipe } from '../filter-cities.pipe';
import { DailyForecastPageModule } from '../daily-forecast/daily-forecast.module';
import { HourlyForecastPageModule } from '../hourly-forecast/hourly-forecast.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    ReactiveFormsModule,
    HourlyForecastPageModule,
    DailyForecastPageModule
  ],
  declarations: [SearchPage, FilterCitiesPipe]
})
export class SearchPageModule {}
