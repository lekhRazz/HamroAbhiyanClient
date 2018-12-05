import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Goods } from 'src/app/classes/goods';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LostService {


  constructor(private _http: HttpClient) { }

  createLostReport(goods: Goods) {
    return this._http.post<any>(environment.baseUrl + 'lost', goods)
      .pipe(catchError(this.errorHandler));
  }

  getLostRecords(): Observable<any> {
    return this._http.get<any>(environment.baseUrl + 'lost')
      .pipe(catchError(this.errorHandler));
  }
  getLostRecordById(id: String): Observable<any> {
    return this._http.get<any>(environment.baseUrl + 'lost/' + id)
      .pipe(catchError(this.errorHandler));
  }
  deleteLostRecord(id: String): Observable<any> {
    return this._http.delete<any>(environment.baseUrl + 'lost/' + id)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
