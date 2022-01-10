import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { DailyForecastPageModule } from '../daily-forecast/daily-forecast.module';
import { HourlyForecastPageModule } from '../hourly-forecast/hourly-forecast.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HourlyForecastPageModule,
    DailyForecastPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
