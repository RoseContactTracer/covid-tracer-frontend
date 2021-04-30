import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PositiveCaseComponent } from './positiveCase/positiveCase.component';
import { AssignedCasesComponent } from './AssignedCases/AssignedCases.component';
import { config } from 'rxjs';
import { PersonProfileComponent } from './person-profile/person-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: 'positive-case', component: PositiveCaseComponent },
  { path: 'positive-case/AssignedCases', component: AssignedCasesComponent },
  { path: 'userlist/:id', component: PersonProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
