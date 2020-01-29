import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from './models/car';


@Injectable({
  providedIn: 'root'
})
export class CarsService {

  apiUrl: string = '/cars';

  constructor(private http: HttpClient) { }

  getCars(): Observable<Array<Car>> {
    return this.http.get<Array<Car>>(`${this.apiUrl}`);
  }

  getCarById(id: number) {
    return this.http.get<Array<Car>>(`${this.apiUrl}/${ id }`);
  }
}
