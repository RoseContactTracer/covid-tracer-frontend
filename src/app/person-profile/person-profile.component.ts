import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { UserService } from '../user/user.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-person-profile',
  templateUrl: './person-profile.component.html',
  styleUrls: ['./person-profile.component.css']
})
export class PersonProfileComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'middleName', 'lastName', 'roseID', 'email', 'phoneNumber', 'address', 'actions'];

  dataSource;

  constructor(private UserService: UserService, private _Activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this._Activatedroute.paramMap.subscribe(params => {
      const personID = + params.get('id');
      if (personID) {
        console.log(personID)
        this.UserService.findByID(personID).subscribe(data => {
          this.dataSource = new MatTableDataSource(data);
        });
        }
      }
    )
  }

  addCase(user: any, id: any) {
      this.UserService.addCase(id, user).subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
      });
  }
}
