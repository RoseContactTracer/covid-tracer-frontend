import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserlistComponent } from './userlist/userlist.component';
import { MatTableModule } from '@angular/material/table';
import { DashboardComponent } from './dashboard/dashboard.component'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDatepickerModule, MatNativeDateModule, MatPaginatorModule } from "@angular/material";
import { PositiveCaseComponent } from './positiveCase/positiveCase.component'
import { AssignedCasesComponent } from './AssignedCases/AssignedCases.component';
import { PositiveCaseService } from './positiveCase/positiveCase.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user/user.service';
import { PersonProfileComponent } from './person-profile/person-profile.component';
import { AddCaseDialogueComponent } from './add-case-dialogue/add-case-dialogue.component';
import { FormsModule } from '@angular/forms';
import { AssignContactTracerDialogueComponentComponent } from './assign-contact-tracer-dialogue-component/assign-contact-tracer-dialogue-component.component';
import { AssignedCasesService } from './assigned-cases.service';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    DashboardComponent,
    PositiveCaseComponent,
    AssignedCasesComponent,
    PersonProfileComponent,
    AddCaseDialogueComponent,
    AssignContactTracerDialogueComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  providers: [PositiveCaseService, UserService, AssignedCasesService],
  bootstrap: [AppComponent],
  entryComponents: [AddCaseDialogueComponent, AssignContactTracerDialogueComponentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
