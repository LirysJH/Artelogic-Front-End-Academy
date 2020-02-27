import { Component, OnInit } from '@angular/core';
import { Vehicles } from './helpers/vehicle.model';
import { DataService } from './services/data.service';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  vehicles$: Vehicles[];

  constructor(private dataService: DataService, private form: FormComponent) {}

  ngOnInit(){
    return this.dataService.getVehicles()
      .subscribe( data => this.vehicles$ = data );
  }
}
