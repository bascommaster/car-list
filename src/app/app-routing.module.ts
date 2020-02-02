import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import { AddCarComponent } from './cars/add-car/add-car.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cars'
  },
  {
    path: 'cars',
    component: CarsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
