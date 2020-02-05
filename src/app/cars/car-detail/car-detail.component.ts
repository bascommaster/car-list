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
  get: {id: number, mark: string, model: string, color: string};

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

    const idHeader = document.getElementById('id-header');

    // this line is used becouse of resolve.service
    // tslint:disable-next-line: no-string-literal
    this.car = this.route.snapshot.data['car'];
    this.get  = this.car;
    console.log(this.get.model);
    idHeader.innerHTML = 'details for car Id: ' + this.get.id;

  }

}
