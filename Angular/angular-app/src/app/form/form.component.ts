import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { cities } from '../helpers/uacities.model';

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
  citiesData = cities;
  cityName: string;
  response = 'Clicked';

  constructor() { }

  ngOnInit(): void {
  }

  onCheckEnteredData() {
    if (this.cityName) {
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
}
