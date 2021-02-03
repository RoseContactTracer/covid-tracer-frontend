import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButton, MatDatepicker, MatTableDataSource } from '@angular/material';
import { UserService } from '../user/user.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../models/user.model';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { AddCaseDialogueComponent } from '../add-case-dialogue/add-case-dialogue.component';

@Component({
  selector: 'app-person-profile',
  templateUrl: './person-profile.component.html',
  styleUrls: ['./person-profile.component.css']
})
export class PersonProfileComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'middleName', 'lastName', 'roseID', 'email', 'phoneNumber', 'address', 'actions'];

  dataSource;

  response;

  user: User;
  testDate: Date;

  @ViewChild(MatButton) button: MatButton;

  constructor(private UserService: UserService, private _Activatedroute: ActivatedRoute, private dialog: MatDialog) { }

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

  openDialogue(user: User): void {
    const bodyRect = document.body.getBoundingClientRect();
    const dialogRef = this.dialog.open(AddCaseDialogueComponent, {
      width: '500px',
      data: { "testDate": this.testDate },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.addCase(user, result);
    });
  }

  addCase(user: User, testDate: Date) {
    this.response = { user, "testDate": testDate, "quarantineEndDate": testDate }
    console.log(this.response);
    this.UserService.addCase(user.id, this.response).subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
