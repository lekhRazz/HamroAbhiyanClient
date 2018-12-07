import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpRequest, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Goods } from 'src/app/classes/goods';
import { environment } from 'src/environments/environment';
import { UserService } from '../User/user.service';

@Injectable({
  providedIn: 'root'
})
export class LostService {
  userService:UserService
  // private token=this.userService.getToken();
  // private headers = new HttpHeaders({ 'Content-Type': 'application/json','x-auth-token':this.token });

  constructor(private _http: HttpClient) { }

  createLostReport(goods: Goods, file: File) {
      console.log(goods);
      console.log(file);
      const formdata: FormData = new FormData();
      if (file) {
        formdata.append("file", file);
      }
      formdata.append("goods", JSON.stringify(goods));
      const req = new HttpRequest('POST', environment.baseUrl + 'lost', formdata, {
        reportProgress: true,
        responseType: 'text'
      });
      return this._http.request(req);
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
