import { CarsService } from './cars.service';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Car } from './models/car';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class CarResolve implements Resolve<Car>{
  car: Observable<Car>;
  constructor(private carsService: CarsService){}

  resolve(route: ActivatedRouteSnapshot): Observable<Car>{
    this.car = this.carsService.getCarById(route.params['id']);
    return this.car;
  }
}
