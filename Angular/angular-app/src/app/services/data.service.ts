import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicles } from '../helpers/vehicle.model';
import { FormComponent } from '../form/form.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = "http://api.carsxe.com/specs";
  key: string = "8j1enpys1_zfwktj0tr_29gbsm9ic";
  year: string = "";
  make: string = "";
  model: string = "";
  //apiUrl = `${this.url}?key=${this.key}&year=${this.year}&make=${this.make}&model=${this.model}`;
  apiUrl = "http://jsonplaceholder.typicode.com/users";

  constructor(private _http: HttpClient,
              private form: FormComponent) { }

  getVehicles(){
    return this._http.get<Vehicles[]>(this.apiUrl);
  };
}
