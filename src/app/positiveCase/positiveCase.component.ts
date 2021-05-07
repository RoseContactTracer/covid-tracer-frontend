import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { PositiveCaseService } from './positiveCase.service';
import { User } from '../models/user.model';
import { AssignContactTracerDialogueComponentComponent } from '../assign-contact-tracer-dialogue-component/assign-contact-tracer-dialogue-component.component';
import { Case } from '../models/case.model';

@Component({
  selector: 'app-case',
  templateUrl: './positiveCase.component.html',
  styleUrls: ['./positiveCase.component.css']
})
export class PositiveCaseComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['firstName', 'roseID', 'phoneNumber', 'address', 'quarantineEndDate', 'tracer', 'actions'];
  dataSource: MatTableDataSource<Case>;

  private destroyed: Subject<boolean> = new Subject();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  user: User;
  Tracer: User;
  tracerEmail: String;
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
  openDialogue(positiveCase: Case): void {
    const bodyRect = document.body.getBoundingClientRect();
    const dialogRef = this.dialog.open(AssignContactTracerDialogueComponentComponent, {
      width: '500px',
      data: { "tracerEmail": this.tracerEmail },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        this.assignContactTracer(positiveCase, this.tracerEmail);
      }
    });
  }

  assignContactTracer(positiveCase: Case, tracerEmail: String): void {
    this.caseService.AssignTracer(positiveCase.id, tracerEmail).subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  private getTracerString(positiveCase: Case): string {
    if(positiveCase.contactTracer == null) {
      return 'Unassigned';
    }
    return positiveCase.contactTracer.person.firstName + ' ' + positiveCase.contactTracer.person.lastName;
  }

  private getAssignString(positiveCase: Case): string {
    if(positiveCase.contactTracer == null) {
      return 'Assign a Contact Tracer';
    }
    return 'Assign a Different Contact Tracer';
  }

}
