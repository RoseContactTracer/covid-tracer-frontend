import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Case } from '../models/case.model';

@Injectable({
  providedIn: 'root'
})
export class PositiveCaseService {

  private casesUrl: string;

  constructor(private http: HttpClient) {
    this.casesUrl = 'http://localhost:42069/positive-case'
  }

  public getCases(pageNum?: number, entriesPerPage?: number): Observable<Case[]> {
    if (pageNum && entriesPerPage) {
      let params = new HttpParams().set('pageNum', '' + pageNum).set('entriesPerPage', '' + entriesPerPage);
      console.log(params);
      return this.http.get<Case[]>(this.casesUrl, { params });
    }
    return this.http.get<any>(this.casesUrl);
  }

  public AssignTracer(caseId: number, tracerEmail: String): Observable<any> {
    return this.http.post<any>(this.casesUrl + '/' + caseId, tracerEmail);
  }

}
