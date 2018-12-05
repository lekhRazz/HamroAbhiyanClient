import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Job } from 'src/app/classes/job';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {

 
  constructor(private _http:HttpClient) { }


  createJobs(jobs:Job){
    return this._http.post<any>(environment.baseUrl+'job',jobs)
            .pipe(catchError(this.errorHandler));
  }

  getJobs():Observable<any>{
    return this._http.get<any>(environment.baseUrl+'job')
                .pipe(catchError(this.errorHandler));
  }

  getJobsById(id:String):Observable<any>{
    return this._http.get<any>(environment.baseUrl+'job/'+id)
                      .pipe(catchError(this.errorHandler));
  }

  deleteJob(id:String):Observable<any>{
    return this._http.delete(environment.baseUrl+'job/'+id)
                      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error);
  }
}
