import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { PoolsService } from './pools.service';
import { Pool } from '../models/pool.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-pools',
  templateUrl: './pools.component.html',
  styleUrls: ['./pools.component.css']
})
export class PoolsComponent implements OnInit {

  constructor(private poolService: PoolsService, private router: Router) { }

  displayedColumns: string[] = ['Name 1', 'Name 2', 'Name 3', 'Name 4', 'Date'];
  dataSource;

  ngOnInit() {
    this.getPools();
  }

  private getPools() {
    this.poolService.getPools().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  openPage(id: number) {
    this.router.navigateByUrl('/userlist/' + id);
  }

}
