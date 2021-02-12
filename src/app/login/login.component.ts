import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import "rosefire";
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  handleLogin() {
    this.loginService.login();
  }

  ngOnInit() {
    this.handleLogin();
  }

}
