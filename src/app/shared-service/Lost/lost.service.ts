import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Goods } from 'src/app/classes/goods';

@Injectable({
  providedIn: 'root'
})
export class LostService {

  _url='http://localhost:3000/api/item/';

  constructor(private _http:HttpClient) { }

  createLostReport(goods:Goods){
    return this._http.post<any>(this._url,goods)
            .pipe(catchError(this.errorHandler));
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error);
  }
}
