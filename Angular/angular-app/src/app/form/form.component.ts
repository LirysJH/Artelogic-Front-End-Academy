import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  allowSendRequest: boolean = false;
  vehicleMake: string = "";
  vehicleModel: string = "";
  vehicleYear: string = "";

  response = "Clicked";

  constructor() { }

  ngOnInit(): void {
  }

  onCheckEnteredData(){
    if(this.vehicleMake !== "" && this.vehicleModel !== "" && this.vehicleYear !== "")
    {
      this.allowSendRequest = true;
    }
    else
    {
      this.allowSendRequest = false;
    }
  };

  getVehicleMake(event: Event){
    this.vehicleMake = (<HTMLInputElement>event.target).value;
  };

  getVehicleModel(event: Event){
    this.vehicleModel = (<HTMLInputElement>event.target).value;
  };

  getVehicleYear(event: Event){
    this.vehicleYear = (<HTMLInputElement>event.target).value;
  };

  onSearchButtonClicked(){
    this.onCheckEnteredData();
    if(this.allowSendRequest)
    {
      console.log("Clicked");
    }
  };

}
