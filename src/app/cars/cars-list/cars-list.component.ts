import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';
import { CarsService } from '../cars.service';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less']
})
export class CarsListComponent implements OnInit {

  cars: Observable<Car[]>;

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.loadCars();
  }

  loadCars(): void {
    this.carsService.getCars().subscribe(cars => {
      this.cars = this.carsService.getCars();
    },
    (error: HttpErrorResponse) => {
      console.log(error.status);
    });
  }

}
