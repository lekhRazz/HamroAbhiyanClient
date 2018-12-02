import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { User } from 'src/app/classes/user';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
_url='http://localhost:3000/api/users/';
  constructor(private _http:HttpClient) { }

  saveUser(user:User){
    return this._http.post<any>(this._url,user)
            .pipe(catchError(this.errorHandler));
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error);
  }
}
