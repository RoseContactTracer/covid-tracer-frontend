import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pool } from '../models/pool.model';

@Injectable({
  providedIn: 'root'
})
export class PoolsService {

  private poolUrl = 'http://localhost:42069/positive-pool';

  constructor(private http: HttpClient) { }

  getPools(): Observable<Pool[]> {
    return this.http.get<Pool[]>(this.poolUrl);
  }

}
