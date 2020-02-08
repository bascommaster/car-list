import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Car } from './models/car';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CarsService {

  // apiUrl = 'https://cors-anywhere.herokuapp.com/cars-list.herokuapp.com/api/cars/';
  apiUrl = environment.URL_API;

  constructor(private http: HttpClient) { }

  getCars(): Observable<Array<Car>> {
    return this.http.get<Array<Car>>(`${this.apiUrl}`);
  }

  getCarById(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/${id}`);
  }

  getCarByColor(color: string): Observable<Array<Car>> {
    return this.http.get<Array<Car>>(`${this.apiUrl}/color/${color}`);
  }

  addNewCar(newCar: Car): Observable<Car> {
    return this.http.post<Car>(`${this.apiUrl}`, newCar);
  }

  deleteCarById(id: number): Observable<Car> {
    return this.http.delete<Car>(`${this.apiUrl}/${id}`);
  }
}
