import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { PoolsService } from './pools.service';
import { Pool } from '../models/pool.model';
import { User } from '../models/user.model';
import { Router, RouterModule } from '@angular/router';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { AddPoolDialogComponent } from '../add-pool-dialog/add-pool-dialog.component';
import { PoolDialogData } from '../models/add-pool-dialog.model';

@Component({
  selector: 'app-pools',
  templateUrl: './pools.component.html',
  styleUrls: ['./pools.component.css']
})
export class PoolsComponent implements OnInit {

  constructor(private poolService: PoolsService, private router: Router, private dialog: MatDialog) { }

  person1Info: String;
  person2Info: String;
  person3Info: String;
  person4Info: String;

  displayedColumns: string[] = ['Name 1', 'Name 2', 'Name 3', 'Name 4', 'Date'];
  dataSource: MatTableDataSource<Pool>;

  ngOnInit() {
    this.getPools();
  }

  private getPools() {
    this.poolService.getPools().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  private getNameString(person: User): String {
    if(person == null) {
      return '';
    }
    return person.firstName + ' ' + person.lastName;
  }

  openPage(id: number) {
    this.router.navigateByUrl('/userlist/' + id);
  }

  openDialog() {
    const bodyRect = document.body.getBoundingClientRect();
    const dialogRef = this.dialog.open(AddPoolDialogComponent, {
      width: '500px',
      data: { 'person1Info': this.person1Info,
              'person2Info': this.person2Info,
              'person3Info': this.person3Info,
              'person4Info': this.person4Info
            },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        console.log('hello');
        this.addPool(result);
      }
    });
  }

  addPool(result: PoolDialogData) {
    this.poolService.addPool(result).subscribe(data => {
      this.getPools();
    });
    // this.getPools();
  }

}
