import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { PositiveCaseService } from './positiveCase.service';
import { User } from '../models/user.model';
import { AssignContactTracerDialogueComponentComponent } from '../assign-contact-tracer-dialogue-component/assign-contact-tracer-dialogue-component.component';

@Component({
  selector: 'app-case',
  templateUrl: './positiveCase.component.html',
  styleUrls: ['./positiveCase.component.css']
})
export class PositiveCaseComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['firstName', 'roseID', 'phoneNumber', 'address', 'quarantineEndDate','actions'];
  dataSource: MatTableDataSource<any>;

  private destroyed: Subject<boolean> = new Subject();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  user: User;
  Tracer: User;
  response;

  constructor(private caseService: PositiveCaseService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getCases();
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

  //TODO is user the right thing to pass in here?
  openDialogue(user: User): void {
    const bodyRect = document.body.getBoundingClientRect();
    const dialogRef = this.dialog.open(AssignContactTracerDialogueComponentComponent, {
      width: '500px',
      data: { "ContactTracer": this.Tracer },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        this.assignContactTracer(user, this.Tracer);
      }
    });
  }

    assignContactTracer(user: User,tracer: User): void {
      this.Tracer = tracer;
      this.response = { tracer};
      console.log(this.response);
      this.caseService.AssignTracer(user.id, tracer.id).subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
    });

  }
}
