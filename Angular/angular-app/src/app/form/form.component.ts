import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { cities } from '../helpers/uacities.model';
import { FormItem } from './form-item';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  formItem: FormItem;
  allowSendRequest = true;
  citiesData = cities;  // fetch cities' info
  cityName: string;

  constructor() {
    this.formItem = new FormItem('London', 'Rainy', 23);
  }

  ngOnInit(): void { }

  onSearchData() {
    if (this.cityName) {
      this.allowSendRequest = true;
    } else {
      this.allowSendRequest = false;
    }
  }
}
