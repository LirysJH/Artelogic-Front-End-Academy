import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Key } from '../key/key';
import { IWeather } from '../helpers/weather.interface';
// import { map } from 'rxjs/operators';
import { FormComponent } from '../form/form.component';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
  weatherKey = Key.weatherKey;

  city: 'Lviv';

  weatherApiUrl = `${this.weatherUrl}?q=${this.city}&appid=${this.weatherKey}&units=metric`;

  constructor(private http: HttpClient,
              public form: FormComponent) { }

  getWeather() {
    return this.http.get<IWeather[]>(this.weatherApiUrl);
  }
}
