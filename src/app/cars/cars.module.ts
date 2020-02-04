import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { SharedModule } from '../shared/shared.module';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { RouterModule } from '@angular/router';
import { CarResolve } from './car-resolve.service';
import { AddCarComponent } from './add-car/add-car.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DelCarComponent } from './del-car/del-car.component';
import { ShowByIdComponent } from './show-by-id/show-by-id.component';
import { ShowByColorComponent } from './show-by-color/show-by-color.component';

@NgModule({
  exports: [CarsListComponent],
  providers: [CarResolve],
  declarations: [CarsListComponent, CarDetailComponent, AddCarComponent, DelCarComponent, ShowByIdComponent, ShowByColorComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class CarsModule { }
