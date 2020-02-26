import { Component, OnInit } from '@angular/core';
import { Vehicle } from './vehicle.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  vehicles$: Vehicle[];

  constructor(private dataService: DataService) {}

  ngOnInit(){
    return this.dataService.getVehicles()
    .subscribe( data => this.vehicles$ = data );
  }
}
