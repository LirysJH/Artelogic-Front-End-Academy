import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { WeatherItems } from '../helpers/weather.data';
import { FormItem } from '../form/form-item';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  getWeatherItems() {
    return WeatherItems;
  }

  addWeatherItem(weatherItem: FormItem) {
    WeatherItems.push(weatherItem);
  }

  searchWeatherData(cityName: string) {
    const weatherApiUrl = `weather${environment.weatherUrl}
                           ?q=${cityName}&appid=${environment.weatherKey}
                           &units=metric`;

    return this.http.get(weatherApiUrl)
            .pipe(map(response => response),
              catchError(error => throwError(error)));
  }
}
