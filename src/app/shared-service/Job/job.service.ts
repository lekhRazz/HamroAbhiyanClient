import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Job } from 'src/app/classes/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  _url='';
  constructor(private _http:HttpClient) { }


  createLostReport(jobs:Job){
    return this._http.post<any>(this._url,jobs)
            .pipe(catchError(this.errorHandler));
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error);
  }
}
