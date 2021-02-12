import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import "rosefire";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  login() {
    Rosefire.signIn(environment.registryToken, (error, rfUser: RosefireUser) => {
      if (error) {
        // User not logged in!
        console.error(error);
        return;
      } else {
        // Use the token to authenticate with your server
        // checkout the server SDKs for more information.
        
      }
    });
  }

  logout() {
    //hmmm
  }

  ngOnInit() {

  }

}
