import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:42069/userlist'
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public findByID(id: number): Observable<User[]> {
    console.log(id)
    return this.http.get<User[]>(this.usersUrl + '/' + id);
  }

  public addCase(id: number, user: User[]): Observable<User[]> {
    return this.http.post<User[]>(this.usersUrl + '/' + id, user);
  }

}
