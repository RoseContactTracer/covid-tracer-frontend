import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material";
import { AssignDialogData } from '../models/assign-contact-tracer-dialog.model';

@Component({
  selector: 'app-assign-contact-tracer-dialogue-component',
  templateUrl: './assign-contact-tracer-dialogue-component.component.html',
  styleUrls: ['./assign-contact-tracer-dialogue-component.component.css']
})
export class AssignContactTracerDialogueComponentComponent implements OnInit {

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: AssignDialogData, public dialogRef: MatDialogRef<AssignContactTracerDialogueComponentComponent>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
