import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import "rosefire";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authenticated = false;
  user;

  constructor(private router: Router) { }

  login() {
    Rosefire.signIn(environment.registryToken, (error, rfUser: RosefireUser) => {
      if (error) {
        // login failed
        console.error(error);
        return;
      } else {
        // still need to get the users role from the backend
        this.user = rfUser;
        this.authenticated = true;
        console.log(rfUser.username);
        this.router.navigateByUrl('/dashboard');
      }
    });
  }

  logout() {
    this.user = null;
    this.authenticated = false;
    this.router.navigateByUrl('/login');
  }

  isAuthenticated() {
    return this.authenticated;
  }

}
