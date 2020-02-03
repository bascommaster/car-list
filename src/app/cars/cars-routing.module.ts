import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarResolve } from './car-resolve.service';
import { AddCarComponent } from './add-car/add-car.component';
import { DelCarComponent } from './del-car/del-car.component';


const carsRoutes: Routes = [
  {
    path: 'cars/:id',
    component: CarDetailComponent,
    resolve: { car: CarResolve}
  },

  {
    path: 'add',
    component: AddCarComponent,
  },

  {
    path: 'del',
    component: DelCarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(carsRoutes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
