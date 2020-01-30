import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../models/car';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.less']
})
export class CarDetailComponent implements OnInit {

  car: Car;

  constructor(private carsService: CarsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadCarById();
  }

  loadCarById(): void {
    // const id = +this.route.snapshot.params['id'];

    // this.carsService.getCarById(id).subscribe(car => {
    //   this.car = car;
    //   console.log(car);
    // });

    // this line is used becouse of resolve.service
    this.car = this.route.snapshot.data['car'];
    console.log(this.car);
  }

}
