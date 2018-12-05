import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Goods } from 'src/app/classes/goods';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoundService {


  constructor(private _http:HttpClient) { }

  createFoundReport(goods:Goods){
    return this._http.post<any>(environment.baseUrl+'found',goods)
            .pipe(catchError(this.errorHandler));
  }

  getFoundReports():Observable<any>{
    return this._http.get<any>(environment.baseUrl+'found')
                      .pipe(catchError(this.errorHandler));
  }
 getFoundById(id:String):Observable<any>{
   return this._http.get<any>(environment.baseUrl+'found/'+id)
                    .pipe(catchError(this.errorHandler));
 }

 deleteFound(id:String):Observable<any>{
   return this._http.delete<any>(environment.baseUrl+'found/'+id)
                    .pipe(catchError(this.errorHandler));
 }
  errorHandler(error:HttpErrorResponse){
    return throwError(error);
  }
}
