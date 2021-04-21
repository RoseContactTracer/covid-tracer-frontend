import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PositiveCaseService {

  private casesUrl: string;

  constructor(private http: HttpClient) {
    this.casesUrl = 'http://localhost:42069/positive-case'
  }

  public getCases(pageNum?: number, entriesPerPage?: number): Observable<any> {
    if (pageNum && entriesPerPage) {
      let params = new HttpParams().set('pageNum', '' + pageNum).set('entriesPerPage', '' + entriesPerPage);
      console.log(params);
      return this.http.get<any>(this.casesUrl, { params });
    }
    return this.http.get<any>(this.casesUrl);
  }

  public AssignTracer(UserId?: number, TracerId?: number): Observable<any> {
    //TODO is this post how to send to this URL with that param??
    return this.http.post<any>(this.casesUrl + '/' + UserId.toString, TracerId);
  }

}
