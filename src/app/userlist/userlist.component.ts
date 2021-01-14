import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface User {
  name: String 
  student_id: String
  cell_number: String
  residence: String
}

const SAMPLE_DATA: User[] = [
  {name: 'Maura Coriale', student_id: '801XXXXXX', cell_number: '505-555-5555', residence: 'Percopo Hall'},
  {name: 'Joanna Garrett', student_id: '801XXXXXX', cell_number: '505-555-5556', residence: 'Percopo Hall'},
  {name: 'Jackson Hansel', student_id: '801XXXXXX', cell_number: '505-555-5557', residence: 'Percopo Hall'},
  {name: 'Jake Meister', student_id: '801XXXXXX', cell_number: '505-555-5558', residence: 'Off-Campus Apt'},
  {name: 'Noah Thomas', student_id: '801XXXXXX', cell_number: '505-555-5559', residence: 'Off-Campus Apt'},

];
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  displayedColumns: string[] = ['name', 'student_id', 'cell_number', 'residence'];

  dataSource = SAMPLE_DATA;
  constructor() { }

  ngOnInit() {
  }
}
