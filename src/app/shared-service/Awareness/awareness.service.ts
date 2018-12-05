import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Awareness } from 'src/app/classes/awareness';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AwarenessService {

  constructor(private _http:HttpClient) { }


  createNews(awareness:Awareness){
    return this._http.post<any>(environment.baseUrl+'awareness',awareness)
            .pipe(catchError(this.errorHandler));
  }
  getAwarenesses():Observable<any>{
    return this._http.get<any>(environment.baseUrl+'awareness')
                .pipe(catchError(this.errorHandler));
  }
  getAwarenessById(id:String):Observable<any>{
    return this._http.get<any>(environment.baseUrl+'awareness/'+id)
                      .pipe(catchError(this.errorHandler));
  }
  deleteAwareness(id:String):Observable<any>{
    return this._http.delete<any>(environment.baseUrl+'awareness/'+id)
                      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error);
  }
}
