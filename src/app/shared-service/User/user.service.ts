import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { User } from 'src/app/classes/user';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
_url='http://localhost:3000/api/users/';
  constructor(private _http:HttpClient) { }

  user:User;
  saveUser(user:User){
    return this._http.post<any>(environment.baseUrl+'users',user)
            .pipe(catchError(this.errorHandler));
  }

  loginUser(user:User):Observable<any>{
    return this._http.post<any>(environment.baseUrl+'auth',user)
                      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error);
  }

  setter(user:User) {
    this.user = user;
  }
  getter(){
    return this.user;
  }
}
