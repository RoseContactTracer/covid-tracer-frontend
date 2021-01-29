import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class User implements OnInit {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  roseID: string;
  email: string;
  phoneNumber: string;
  housingLocation: {
    address: string;
    id: number;
  }

  constructor() { }

  ngOnInit() {
  }

}
