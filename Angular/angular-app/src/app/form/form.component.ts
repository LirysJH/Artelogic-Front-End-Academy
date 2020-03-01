import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { cities } from '../helpers/uacities.model';
import { FormItem } from './form-item';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  formItem: FormItem;
  citiesData = cities;  // fetch cities' info
  cityName: string;

  weatherItems: FormItem[];

  constructor(private dataService: DataService) {
    this.weatherItems = this.dataService.getWeatherItems();
  }

  ngOnInit(): void { }

  onSubmit() {
    this.dataService.searchWeatherData(this.cityName)
    .subscribe(
      (data: any) => {

        let storage = {
          name: '',
          weather: [{
            description: ''
          }],
          main: {
            temp: 0
          }
        };
        storage = data;
        
        const weatherItem = new FormItem(storage.name,
                                         storage.weather[0].description,
                                         storage.main.temp);
        this.dataService.addWeatherItem(weatherItem);
      }
    );
  }
}
