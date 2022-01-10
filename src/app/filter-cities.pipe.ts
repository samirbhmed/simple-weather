import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCities'
})
export class FilterCitiesPipe implements PipeTransform {

  transform(items: any[], text: any, count: number): any {
    console.log('data =====> ', items);
    if (text === '')
      return [];

    const result = items.filter(item => item.city_name.toLowerCase().indexOf(text.toLowerCase()) !== -1);
    return result.length > count ? result.splice(0, count) : result;
  }

}
