import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { Case } from './case';
import { CaseService } from './case.service';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'roseID', 'phoneNumber', 'address', 'quarantineEndDate'];
  dataSource;

  constructor(private CaseService: CaseService) { }

  private getCases(): void {
    this.CaseService.getCases()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
      });
  }

  ngOnInit() {
    this.getCases();
  }

}