import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { Car } from '../models/car';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.less']
})
export class AddCarComponent implements OnInit {

  car: Car;
  carForm: FormGroup;
  constructor(private carService: CarsService,
              private formBuilder: FormBuilder,
              private route: Router) { }

  ngOnInit() {
    // this.addCar(this.car);
    this.carForm = this.buildCarForm();
  }

  addCar(newCar: Car): void{
    this.carService.addNewCar(newCar).subscribe(car => {
      console.log(car);
    });
  }

  buildCarForm(){
    return this.formBuilder.group({
      mark: ['', Validators.required],
      model: ['', Validators.required],
      color: ['', Validators.required]
    });
  }

}
