import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { News } from 'src/app/classes/news';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  _url = 'http://localhost:3000/api/news/';
  constructor(private _http: HttpClient) { }

  createNews(news: News) {
    return this._http.post<any>(this._url, news)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
