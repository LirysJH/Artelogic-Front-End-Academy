import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from './vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = "http://api.carsxe.com/specs?key=<CarsXE_API_Key>&year=2004&make=toyota&model=camry";
  /* 8j1enpys1_zfwktj0tr_29gbsm9ic */

  constructor(private _http: HttpClient) { }

  getVehicles(){
    return this._http.get<Vehicle[]>(this.apiUrl);
  };
}
