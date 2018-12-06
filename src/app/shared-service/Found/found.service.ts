import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Goods } from 'src/app/classes/goods';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoundService {


  constructor(private _http: HttpClient) { }

  createFoundReport(goods: Goods, file: File) {
    const formdata: FormData = new FormData();
    if (file) {
      formdata.append("file", file);
    }
    formdata.append("goods", JSON.stringify(goods));

    const req = new HttpRequest('POST', environment.baseUrl + 'found', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this._http.request(req);
  }

  getFoundReports(): Observable<any> {
    return this._http.get<any>(environment.baseUrl + 'found')
      .pipe(catchError(this.errorHandler));
  }
  getFoundById(id: String): Observable<any> {
    return this._http.get<any>(environment.baseUrl + 'found/' + id)
      .pipe(catchError(this.errorHandler));
  }

  deleteFound(id: String): Observable<any> {
    return this._http.delete<any>(environment.baseUrl + 'found/' + id)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
