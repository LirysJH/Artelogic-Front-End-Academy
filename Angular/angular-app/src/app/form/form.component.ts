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

  allowSendRequest = true;
  citiesData = cities;  // fetch cities' info
  cityName: string;

  constructor() { }

  ngOnInit(): void { }

  onSearchData() {
    if (this.cityName) {
      this.allowSendRequest = true;
    } else {
      this.allowSendRequest = false;
    }
  }
}
