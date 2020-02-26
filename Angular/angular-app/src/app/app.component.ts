import { Component, OnInit } from '@angular/core';
import { Vehicle } from './vehicle.model';
import { DataService } from './data.service';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  vehicles$: Vehicle[];

  constructor(private dataService: DataService, private form: FormComponent) {}

  ngOnInit(){
    if(this.form.allowSendRequest)
    {
      return this.dataService.getVehicles()
      .subscribe( data => this.vehicles$ = data );
    }
  }
}
