import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PoolDialogData } from '../models/add-pool-dialog.model';
import { Pool } from '../models/pool.model';

@Injectable({
  providedIn: 'root'
})
export class PoolsService {

  private poolUrl = 'http://localhost:42069/positive-pool';

  constructor(private http: HttpClient) { }

  getAllPools(): Observable<Pool[]> {
    return this.http.get<Pool[]>(this.poolUrl);
  }

  getNewPools(): Observable<Pool[]> {
    return this.http.get<Pool[]>(this.poolUrl + '/new');
  }

  addPool(data: PoolDialogData): Observable<Pool[]> {
    let emails: String[] = [data.person1Info, data.person2Info, data.person3Info, data.person4Info];

    return this.http.post<Pool[]>(this.poolUrl, emails);
  }

}
