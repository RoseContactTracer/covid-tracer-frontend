import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AssignedCasesService } from '../assigned-cases.service';

@Component({
  selector: 'app-AssignedCases',
  templateUrl: './AssignedCases.component.html',
  styleUrls: ['./AssignedCases.component.css']
})
export class AssignedCasesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'student_id', 'cell_number', 'quarantine_location', 'Tracer'];

  dataSource;
  AssignedCases;
  constructor(private assignedCasesService: AssignedCasesService) { }

  ngOnInit() {
    this.getAssignedCases();
  }

  getAssignedCases(): void {
    this.assignedCasesService.getAssignedCases().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
}
