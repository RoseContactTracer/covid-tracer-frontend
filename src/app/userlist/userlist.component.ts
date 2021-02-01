import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
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

  constructor(private UserService: UserService) { }

  ngOnInit() {
    this.UserService.findAll().subscribe((data: User[]) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
}
