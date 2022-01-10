import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HourlyForecastPage } from './hourly-forecast.page';

const routes: Routes = [
  {
    path: '',
    component: HourlyForecastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HourlyForecastPageRoutingModule {}
