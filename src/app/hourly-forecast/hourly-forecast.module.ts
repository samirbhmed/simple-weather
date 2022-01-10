import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HourlyForecastPageRoutingModule } from './hourly-forecast-routing.module';

import { HourlyForecastPage } from './hourly-forecast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HourlyForecastPageRoutingModule
  ],
  declarations: [HourlyForecastPage],
  exports: [HourlyForecastPage]
})
export class HourlyForecastPageModule { }
