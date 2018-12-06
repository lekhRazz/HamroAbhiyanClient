import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpRequest } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { News } from 'src/app/classes/news';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NewsService {


  progress: any;
  constructor(private _http: HttpClient) { }

  createNews(news: News, file: File): Observable<HttpEvent<{}>> {


    console.log(file)
    console.log(news)
    const formdata: FormData = new FormData();
    if (file) {
      formdata.append("file", file);
    }
    formdata.append("news", JSON.stringify(news));

    const req = new HttpRequest('POST', environment.baseUrl + 'news', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this._http.request(req);



    // return Observable.create((observer: any) => {
    //   let formData = new FormData,
    //     xhr: XMLHttpRequest = new XMLHttpRequest();

    //   if (file) {
    //     formData.append("file", file);
    //   }
    //   formData.append("news", JSON.stringify(news));

    //   xhr.onreadystatechange = () => {
    //     if (xhr.readyState == 4) {
    //       if (xhr.status == 200) {
    //         observer.next(JSON.parse(xhr.response))
    //         observer.complete();
    //       } else {
    //         observer.error(JSON.parse(xhr.response));
    //       }
    //     }
    //   };
    //   xhr.upload.onprogress = (event) => {
    //     this.progress = Math.round(event.loaded / event.total * 100);
    //   };
    //   xhr.open('POST', environment.baseUrl + 'news', true);
    //   // xhr.setRequestHeader('Authorization', 'Bearer' + Config .getAuthToken());
    //   xhr.send(formData);

    // })
  }

  getNews(): Observable<any> {
    return this._http.get<any>(environment.baseUrl + 'news')
      .pipe(catchError(this.errorHandler));
  }

  getNewsById(id: String): Observable<any> {
    return this._http.get(environment.baseUrl + 'news/' + id)
      .pipe(catchError(this.errorHandler));
  }

  deleteNews(id: String): Observable<any> {
    return this._http.delete<any>(environment.baseUrl + 'news/' + id)
      .pipe(catchError(this.errorHandler));
  }

  shareNews(url:String,email:String){
    return this._http.post(environment.baseUrl+'mailer/'+email,url)
                .pipe(catchError(this.errorHandler));
    
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
