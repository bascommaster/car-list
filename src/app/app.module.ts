import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CarsModule} from './cars/cars.module';
import { CarsService } from './cars/cars.service';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { CarsRoutingModule } from './cars/cars-routing.module';
import { AddCarComponent } from './cars/add-car/add-car.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarsRoutingModule,
    CarsModule,
    HttpClientModule,
    CoreModule,
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
