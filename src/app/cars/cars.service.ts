import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarsService {

  apiUrl: string = '/cars';

  constructor(private http: HttpClient) { }

  getCars(): Observable<Array<any>> {
    return  this.http.get<Array<any>>(`${this.apiUrl}`);
  }
}
