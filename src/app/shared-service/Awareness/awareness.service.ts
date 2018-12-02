import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Awareness } from 'src/app/classes/awareness';

@Injectable({
  providedIn: 'root'
})
export class AwarenessService {

  _url='';
  constructor(private _http:HttpClient) { }


  createNews(awareness:Awareness){
    return this._http.post<any>(this._url,awareness)
            .pipe(catchError(this.errorHandler));
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error);
  }
}
