import { Component, OnInit } from '@angular/core';
import {Car} from "../models/car";

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less']
})
export class CarsListComponent implements OnInit {

  cars :Car[]=[
    {
      id: 1,
      mark: "Fiat",
      model: "126p",
      color: "RED"
    },
    {
      id: 1,
      mark: "Opel",
      model: "Corsa",
      color: "RED"
    },    {
      id: 1,
      mark: "Renault",
      model: "Clio",
      color: "GREEN"
    },    {
      id: 1,
      mark: "Audi",
      model: "A8",
      color: "SILVER"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
