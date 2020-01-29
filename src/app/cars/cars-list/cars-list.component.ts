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
    // this.loadCarById(2);
    // this.loadCarByColor('red');
  }

  loadCars(): void {
    this.carsService.getCars().subscribe(cars => {
      this.cars = this.carsService.getCars();
    },
    (error: HttpErrorResponse) => {
      console.log(error.status);
    });
  }

  loadCarById(id: number): void {
    this.carsService.getCarById(id).subscribe(car => {
      // this.cars = this.carsService.getCarById(id);
      console.log(car);
    });
  }

  loadCarByColor(color: string): void{
    this.carsService.getCarByColor(color).subscribe(cars => {
      this.cars = this.carsService.getCarByColor(color);
      console.log(cars);
    });
  }

  addNewCar(newCar: Car): void {
    this.carsService.addNewCar(newCar).subscribe(car => {
      // this.cars = this.carsService.addNewCar(newCar);
      console.log(car);
    });
  }

  deleteCarById(id: number): void {
    this.carsService.deleteCarById(id).subscribe(car => {
      console.log(car);
      this.loadCars();
    },
    error => console.log(error));
  }

}
