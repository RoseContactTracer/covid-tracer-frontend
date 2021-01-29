import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserlistComponent } from './userlist/userlist.component';
import { MatTableModule } from '@angular/material/table';
import { DashboardComponent } from './dashboard/dashboard.component'  
import {MatGridListModule} from '@angular/material/grid-list'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import { CaseComponent } from './case/case.component'
import { AssignedCasesComponent } from './AssignedCases/AssignedCases.component';
import { CaseService } from './case/case.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user/user.service';
import { PersonProfileComponent } from './person-profile/person-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    DashboardComponent,
    CaseComponent,
    AssignedCasesComponent,
    PersonProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [CaseService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
