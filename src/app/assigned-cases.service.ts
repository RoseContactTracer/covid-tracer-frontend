import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssignedCasesService {
  AssignedCasesURL = 'THIS IS THE URL TO THE ENDPOINT';

  constructor(private http: HttpClient) { }


  getAssignedCases() {
    return this.http.get(this.AssignedCasesURL);
  }
}
