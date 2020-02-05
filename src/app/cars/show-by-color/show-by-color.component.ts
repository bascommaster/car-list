import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { Car } from '../models/car';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-by-color',
  templateUrl: './show-by-color.component.html',
  styleUrls: ['./show-by-color.component.less']
})
export class ShowByColorComponent implements OnInit {

  carColor: string;
  cars: Observable<Car[]>;

  constructor(private carService: CarsService) { }

  ngOnInit() {
  }

  getCarsByColor(color: string) {
    this.carService.getCarByColor(color).subscribe(car => {
      this.cars = this.carService.getCarByColor(color);
      console.log(car);
    });
  }

}
