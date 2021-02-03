import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material";
import { DialogData } from '../models/add-case-dialog.model';

@Component({
  selector: 'app-add-case-dialogue',
  templateUrl: './add-case-dialogue.component.html',
  styleUrls: ['./add-case-dialogue.component.css']
})
export class AddCaseDialogueComponent {

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: DialogData, public dialogRef: MatDialogRef<AddCaseDialogueComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
