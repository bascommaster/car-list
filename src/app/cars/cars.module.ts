import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { SharedModule } from '../shared/shared.module';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { RouterModule } from '@angular/router';
import { CarResolve } from './car-resolve.service';
import { AddCarComponent } from './add-car/add-car.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [CarsListComponent],
  providers: [CarResolve],
  declarations: [CarsListComponent, CarDetailComponent, AddCarComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class CarsModule { }
