import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-del-car',
  templateUrl: './del-car.component.html',
  styleUrls: ['./del-car.component.less']
})
export class DelCarComponent implements OnInit {

  car: Car;
  carId: number;


  constructor(private carService: CarsService) { }

  ngOnInit() {
  }

  removeCarById(id: number) {
    const deleteIdInfo = document.getElementById('delete-id-info');
    const deleteCarInfo = document.getElementById('delete-car-info');

    this.carService.getCarById(id).subscribe(car => {
      if (car !== undefined) {
        const {color, mark, model} = car;
        console.log(color + ' ' + mark + ' ' + model);
        deleteCarInfo.innerHTML = 'deleted car was:  ' + mark + ' ' + model + ' ' + color;

        this.carService.deleteCarById(car.id).subscribe(() => {});
      }
    });
  }
}
