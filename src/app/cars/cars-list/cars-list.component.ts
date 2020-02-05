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
      console.log(cars);
    },
    (error: HttpErrorResponse) => {
      console.log(error.status);
    });
  }

  loadCarByColor(color: string): void{
    this.carsService.getCarByColor(color).subscribe(cars => {
      this.cars = this.carsService.getCarByColor(color);
      console.log(cars);
    });
  }

  removeCar(id: number, event: any) {
    event.stopPropagation();
    this.carsService.deleteCarById(id).subscribe(() => {
      this.loadCars();
    },
    error => console.log(error));
  }

}
