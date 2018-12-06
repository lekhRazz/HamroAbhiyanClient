import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpRequest} from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Awareness } from 'src/app/classes/awareness';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AwarenessService {

  constructor(private _http:HttpClient) { }


  createNews(awareness:Awareness,file:File){
   
    console.log(file)
    console.log(awareness)
    const formdata: FormData = new FormData();
    if (file) {
      formdata.append("file", file);
    }
    formdata.append("file",null);
    formdata.append("awareness", JSON.stringify(awareness));

    const req = new HttpRequest('POST', environment.baseUrl + 'awareness', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this._http.request(req);

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
