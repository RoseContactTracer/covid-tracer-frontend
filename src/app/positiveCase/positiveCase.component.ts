import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PositiveCaseService } from './positiveCase.service';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class PositiveCaseComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['firstName', 'roseID', 'phoneNumber', 'address', 'quarantineEndDate'];
  dataSource: MatTableDataSource<any>;

  private destroyed: Subject<boolean> = new Subject();

  constructor(private caseService: PositiveCaseService) { }

  ngOnInit() {
    this.getCases();
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  private getCases(): void {
    this.caseService.getCases().pipe(takeUntil(this.destroyed)).subscribe(data => {
      console.table(data);
      this.dataSource = new MatTableDataSource(data);
    });
  }
}
