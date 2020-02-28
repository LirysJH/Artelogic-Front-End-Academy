import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../helpers/users.model';
import { Key } from '../environment/key.environment';
import { FormComponent } from '../form/form.component';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  weatherUrl = 'api.openweathermap.org/data/2.5/weather';
  weatherKey = Key.weatherKey;
  googleMapsUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
  googleMapsKey = Key.googleMapsKey;

  address = '';
  city = 'Lviv';
  country = 'Ukraine';

  addressApiUrl = `?address=${this.address},+Mountain+View,+CA&key=${this.googleMapsKey}`;
  // ?q={city},{state},{country code}
  weatherApiUrl = `${this.weatherUrl}?q=${this.city},${this.country}&appid=${this.weatherKey}`;

  usersApiUrl = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient,
              private form: FormComponent) { }

  getUsers() {
    return this.http.get<User[]>(this.usersApiUrl);
  }
}
