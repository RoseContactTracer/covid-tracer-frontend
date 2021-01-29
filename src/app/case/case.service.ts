import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CaseService {
  
  private casesUrl: string;

  constructor(private http: HttpClient) { 
    this.casesUrl = 'http://localhost:42069/positive-case'
  }

  public getCases(): Observable<any> {
    return this.http.get<any>(this.casesUrl);
  }

}
