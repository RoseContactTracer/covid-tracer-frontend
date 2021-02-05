import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PositiveCaseService } from './positiveCase.service';

@Component({
  selector: 'app-case',
  templateUrl: './positiveCase.component.html',
  styleUrls: ['./positiveCase.component.css']
})
export class PositiveCaseComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['firstName', 'roseID', 'phoneNumber', 'address', 'quarantineEndDate'];
  dataSource: MatTableDataSource<any>;

  private destroyed: Subject<boolean> = new Subject();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private caseService: PositiveCaseService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.getCases();
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  onPageFired(event) {
    this.getCases();
  }

  private getCases(): void {
    this.caseService.getCases().pipe(takeUntil(this.destroyed)).subscribe(data => {
      console.table(data);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}
