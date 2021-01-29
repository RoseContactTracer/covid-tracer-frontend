import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { CaseService } from './case.service';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'roseID', 'phoneNumber', 'address', 'quarantineEndDate'];
  dataSource: MatTableDataSource<any>;

  constructor(private caseService: CaseService) { }

  private getCases(): void {
    this.dataSource = new MatTableDataSource([]);
    this.caseService.getCases().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  ngOnInit() {
    this.getCases();
  }

}