import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarResolve } from './car-resolve.service';
import { AddCarComponent } from './add-car/add-car.component';
import { DelCarComponent } from './del-car/del-car.component';
import { ShowByColorComponent } from './show-by-color/show-by-color.component';


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
    path: 'color',
    component: ShowByColorComponent
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
