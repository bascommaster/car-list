import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarResolve } from './car-resolve.service';
import { AddCarComponent } from './add-car/add-car.component';


const carsRoutes: Routes = [
  {
    path: 'cars/:id',
    component: CarDetailComponent,
    resolve: { car: CarResolve}
  },

  {
    path: 'add',
    component: AddCarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(carsRoutes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
