import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../helpers/users.model';
import { Key } from '../environment/key.environment';
import { FormComponent } from '../form/form.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = "api.openweathermap.org/data/2.5/weather";
  key = Key;
  city: string = "Lviv";
  country: string = "Ukraine";

  //?q={city},{state},{country code}
  apiUrl = `${this.url}?q=${this.city},${this.country}&appid=${this.key}`;
  usersApiUrl = "http://jsonplaceholder.typicode.com/users";

  constructor(private _http: HttpClient,
              private form: FormComponent) { }

  getUsers(){
    return this._http.get<User[]>(this.usersApiUrl);
  };
}
