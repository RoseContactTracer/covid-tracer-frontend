import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AssignedCase } from './models/assignedCase.model';

@Injectable({
  providedIn: 'root'
})
export class AssignedCasesService {
  AssignedCasesURL = 'http://localhost:42069/positive-case/assignedCases';

  constructor(private http: HttpClient) { }


  getAssignedCases(): Observable<AssignedCase[]> {
    return this.http.get<AssignedCase[]>(this.AssignedCasesURL);
  }
}
