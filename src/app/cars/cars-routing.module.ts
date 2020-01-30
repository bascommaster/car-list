import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarResolve } from './car-resolve.service';


const carsRoutes: Routes = [
  {
    path: 'cars/:id',
    component: CarDetailComponent,
    resolve: { car: CarResolve}
  }
];

@NgModule({
  imports: [RouterModule.forChild(carsRoutes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
