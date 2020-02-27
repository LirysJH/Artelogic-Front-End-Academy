import { Component, OnInit } from '@angular/core';
import { User } from './helpers/users.model';
import { DataService } from './services/data.service';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  users$: User[];

  constructor(private dataService: DataService, private form: FormComponent) {}

  ngOnInit(){
    return this.dataService.getUsers()
      .subscribe( data => this.users$ = data );
  }
}
