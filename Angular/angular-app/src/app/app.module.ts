import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { VehicleDataOutputComponent } from './vehicle-data-output/vehicle-data-output.component';

@NgModule({
  declarations: [AppComponent, FormComponent, VehicleDataOutputComponent],
  imports: [ BrowserModule, FormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
