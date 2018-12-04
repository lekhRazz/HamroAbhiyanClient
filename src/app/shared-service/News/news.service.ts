import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { News } from 'src/app/classes/news';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _http: HttpClient) { }

  createNews(news: News) {
    return this._http.post<any>(environment.baseUrl+'news', news)
      .pipe(catchError(this.errorHandler));
  }
  getNews():Observable<any>{
    return this._http.get<any>(environment.baseUrl+'news')
                .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
