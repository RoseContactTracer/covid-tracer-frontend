import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Case } from './case'

const SAMPLE_DATA: Case[] = [
  {name: 'Maura Coriale', student_id: '801XXXXXX', cell_number: '505-555-5555', quarantine_location: 'Holiday Inn 101', quarantine_end_date: '1/24/2021'},
  {name: 'Joanna Garrett', student_id: '801XXXXXX', cell_number: '505-555-5556', quarantine_location: 'Holiday Inn 102', quarantine_end_date: '1/25/2021'},
  {name: 'Jackson Hansel', student_id: '801XXXXXX', cell_number: '505-555-5557', quarantine_location: 'Holiday Inn 103', quarantine_end_date: '1/25/2021'},
  {name: 'Jake Meister', student_id: '801XXXXXX', cell_number: '505-555-5558', quarantine_location: 'Holiday Inn 105', quarantine_end_date: '1/27/2021'},
  {name: 'Noah Thomas', student_id: '801XXXXXX', cell_number: '505-555-5559', quarantine_location: 'Holiday Inn 201', quarantine_end_date: '1/28/2021'},

];

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {

  displayedColumns: string[] = ['name', 'student_id', 'cell_number', 'quarantine_location', 'quarantine_end_date'];

  dataSource = SAMPLE_DATA;

  constructor() { }

  ngOnInit() {
  }

}
