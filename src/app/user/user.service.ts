import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:42069/userlist'
  }

  public findAll(): Observable<any> {
    return this.http.get<any>(this.usersUrl);
  }

  public findByID(id: number): Observable<any> {
    console.log(id)
    return this.http.get<any>(this.usersUrl + '/' + id);
  }

  public addCase(id: number, user: any): Observable<any> {
    return this.http.put<any>(this.usersUrl + '/', id, user);
  }
  
}
