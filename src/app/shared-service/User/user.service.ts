import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/classes/user';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private token=this.getToken();
  // private headers = new HttpHeaders({ 'Content-Type': 'application/json','x-auth-token':this.token });
  // private options = new HttpRequestOptions({ headers: this.headers });


  constructor(private _http: HttpClient) { }

  user: User;
  saveUser(user: User) {
    return this._http.post<any>(environment.baseUrl + 'users', user)
      .pipe(catchError(this.errorHandler));
  }

  getUserById(id:String){
    return this._http.get(environment.baseUrl+'users/'+id)
                      .pipe(catchError(this.errorHandler));
  }
  loginUser(user: User): Observable<any> {
    return this._http.post<any>(environment.baseUrl + 'auth', user)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

  getToken() {
   return  window.localStorage.getItem('x-auth-token');
  }
  getUserUserName() {
    return window.localStorage.getItem('name');
  }
  getUserId(){
    if(typeof window !="undefined"){
      return window.localStorage.getItem('id');
    }
  }
 
}
