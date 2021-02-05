import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material';
import { User } from '../models/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'middleName', 'lastName', 'roseID', 'email', 'phoneNumber', 'address'];

  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private UserService: UserService) { }

  ngOnInit() {
    this.getPeople();
  }

  onPageFired(event) {
    this.getPeople();
  }

  ngAfterViewInit() {
    this.getPeople();
  }

  getPeople() {
    this.UserService.findAll().subscribe((data: User[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

}
