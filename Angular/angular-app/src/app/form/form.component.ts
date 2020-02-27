import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  allowSendRequest: boolean = false;
  users: string;

  address: string;
  city: string;

  response = "Clicked";

  constructor() { }

  ngOnInit(): void {
  }

  onCheckEnteredData(){
    if(this.city)
    {
      this.allowSendRequest = true;
    }
    else
    {
      this.allowSendRequest = false;
    }
  };

  getUsers(event: Event){
    this.users = (<HTMLInputElement>event.target).value.trim();
  };

  onSearchButtonClicked(){
    this.onCheckEnteredData();
    if(this.allowSendRequest)
    {
      /*fetch("https://vindecoder.p.rapidapi.com/decode_vin?vin=4F2YU09161KM33122", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "vindecoder.p.rapidapi.com",
          "x-rapidapi-key": "dce44f373fmsh56a43391357851bp1e8124jsnba4bbaf6b2de"
        }
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });*/
    }
  }
}
