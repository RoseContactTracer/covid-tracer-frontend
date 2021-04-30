import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssignedCasesService {
  AssignedCasesURL = 'http://localhost:42069/positive-case/assignedCases';

  constructor(private http: HttpClient) { }


  getAssignedCases(): Observable<any> {
    return this.http.get(this.AssignedCasesURL);
  }
}
