import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [AppComponent, FormComponent],
  imports: [ BrowserModule, FormsModule, HttpClientModule ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
