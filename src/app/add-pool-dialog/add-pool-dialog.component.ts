import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material";
import { PoolDialogData } from '../models/add-pool-dialog.model';

@Component({
  selector: 'app-add-pool-dialog',
  templateUrl: './add-pool-dialog.component.html',
  styleUrls: ['./add-pool-dialog.component.css']
})
export class AddPoolDialogComponent implements OnInit {

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: PoolDialogData, public dialogRef: MatDialogRef<AddPoolDialogComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
