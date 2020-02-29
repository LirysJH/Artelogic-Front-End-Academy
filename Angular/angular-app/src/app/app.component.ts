import { Component, OnInit } from '@angular/core';
import { IWeather } from './helpers/weather.data';
import { DataService } from './services/data.service';
// import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  weather$: IWeather[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    return this.dataService.getWeather()
      .subscribe( data => this.weather$ = data );
  }
}
