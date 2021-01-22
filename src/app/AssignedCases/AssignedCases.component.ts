import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface AssignedCases {
  name: String
  student_id: String
  cell_number: String
  quarantine_location: String
  quarantine_end_date: String
  Tracer: String
}

const SAMPLE_DATA: AssignedCases[] = [
  { name: 'Maura Coriale', student_id: '801XXXXXX', cell_number: '505-555-5555', quarantine_location: 'Holiday Inn 101', quarantine_end_date: '1/24/2021', Tracer: 'Tracey McTracerson' },
  { name: 'Joanna Garrett', student_id: '801XXXXXX', cell_number: '505-555-5556', quarantine_location: 'Holiday Inn 102', quarantine_end_date: '1/25/2021', Tracer: 'Charlie Contacter'},
  { name: 'Jackson Hansel', student_id: '801XXXXXX', cell_number: '505-555-5557', quarantine_location: 'Holiday Inn 103', quarantine_end_date: '1/25/2021', Tracer: 'Charlie Contacter' },
  { name: 'Jake Meister', student_id: '801XXXXXX', cell_number: '505-555-5558', quarantine_location: 'Holiday Inn 105', quarantine_end_date: '1/27/2021', Tracer: 'Tracey McTracerson' },
  { name: 'Noah Thomas', student_id: '801XXXXXX', cell_number: '505-555-5559', quarantine_location: 'Holiday Inn 201', quarantine_end_date: '1/28/2021', Tracer: 'Tracey McTracerson' },

];
@Component({
  selector: 'app-AssignedCases',
  templateUrl: './AssignedCases.component.html',
  styleUrls: ['./AssignedCases.component.css']
})
export class AssignedCasesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'student_id', 'cell_number', 'quarantine_location', 'Tracer'];

  dataSource = SAMPLE_DATA;
  constructor() { }

  ngOnInit() {
  }
}
