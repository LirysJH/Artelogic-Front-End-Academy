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

  allowSendRequest = false;
  city: string;
  cities = [];

  response = 'Clicked';

  constructor() { }

  ngOnInit(): void {
  }

  onCheckEnteredData() {
    if (this.city) {
      this.allowSendRequest = true;
    } else {
      this.allowSendRequest = false;
    }

    if (this.allowSendRequest) {

    }
  }

  /*getUsers(event: Event) {
    this.users = (<HTMLInputElement>event.target).value.trim();
  }*/

  getCity(event: Event) {
    this.city = (<HTMLInputElement>event.target).value.trim();
    if (this.city) {

    }
  }
}
