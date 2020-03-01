import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Key } from '../key/key';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { WEATHER_ITEMS } from '../helpers/weather.data';
// import { Observable } from 'rxjs';
import { FormItem } from '../form/form-item';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  getWeatherItems() {
    return WEATHER_ITEMS;
  }

  addWeatherItem(weatherItem: FormItem) {
    WEATHER_ITEMS.push(weatherItem);
  }

  searchWeatherData(cityName: string) {
    const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const weatherKey = Key.weatherKey;

    const weatherApiUrl = `${weatherUrl}?q=${cityName}&appid=${weatherKey}&units=metric`;

    return this.http.get(weatherApiUrl)
            .pipe(map(response => response || []),
              catchError(error => throwError(error.message || error)));
  }
}
