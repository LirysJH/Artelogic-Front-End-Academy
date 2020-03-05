import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { cities } from '../helpers/ua-cities.data';
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
        const weatherItem = new FormItem(data.name,
                                         data.weather[0].description,
                                         data.main.temp,
                                         data.wind.speed);
        this.dataService.addWeatherItem(weatherItem);
      }
    );
  }
}
