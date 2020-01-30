import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.less']
})
export class AddCarComponent implements OnInit {

  constructor(private carService: CarsService) { }

  ngOnInit() {
  }

}
