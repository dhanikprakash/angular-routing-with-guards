import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {catchError, tap } from 'rxjs/operators';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private productUrl = 'assets/products/products.json';
  getProducts(): Observable<IProduct[]> {
     return this.http.get<IProduct[]>(this.productUrl).pipe(
       tap(data => console.log(`All + ${JSON.stringify(data)}`)), 
       catchError(this.handleError)
     )
  }
  private handleError(err: HttpErrorResponse){
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
      errorMessage = `An Error has occoured : ${err.error.message}`;
    }
    else{
      errorMessage = `Server returned code: ${err.status}, error message ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
