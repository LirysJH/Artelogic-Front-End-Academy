import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from './vehicle.model';
import { FormComponent } from './form/form.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  key = "8j1enpys1_zfwktj0tr_29gbsm9ic";
  apiUrl = "http://api.carsxe.com/specs?key=" + this.key + "&year=2004&make=toyota&model=camry";

  constructor(private _http: HttpClient, private form: FormComponent) { }

  getVehicles(){
    return this._http.get<Vehicle[]>(this.apiUrl);
  };
}
