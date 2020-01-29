import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  exports: [CarsListComponent],
  declarations: [CarsListComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class CarsModule { }
