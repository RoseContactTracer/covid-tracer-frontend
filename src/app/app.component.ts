import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Rose-Hulman Covid Tracer: A Pandemic Response Tool';

  constructor(private login: LoginService, private router: Router) { }

}