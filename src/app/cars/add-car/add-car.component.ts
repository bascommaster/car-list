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
    this.carForm = this.buildCarForm();
  }

  addCar(): void {
    this.carService.addNewCar(this.carForm.value).subscribe(() => {});
  }

  buildCarForm() {
    return this.formBuilder.group({
      // id: ['', Validators.required],
      mark: ['', Validators.required],
      model: ['', Validators.required],
      color: ['', Validators.required]
    });
  }

}
