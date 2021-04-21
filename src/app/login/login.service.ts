import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import "rosefire";
import { Router } from '@angular/router';
import { ROUTER_FORROOT_GUARD } from '@angular/router/src/router_module';
import { UserService } from '../user/user.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authenticated = false;
  user;
  role;
  public token;

  constructor(private router: Router, private personService: UserService, private http: HttpClient) { }

  login() {
    Rosefire.signIn(environment.registryToken, (error, rfUser: RosefireUser) => {
      if (error) {
        // login failed
        console.error(error);
        return;
      } else {
        //this.getRole();
        this.user = rfUser;
        this.token = rfUser.token;
        this.authenticated = true;
        this.router.navigateByUrl('/dashboard');
      }
    });
  }

  // private setToken(token: String) {
  //   console.log('hello?');
  //   this.http.get<any>('http://localhost:42069/login/settoken/' + token);
  // }

  public logout() {
    this.authenticated = false;
    this.token = null;
    this.router.navigateByUrl('/login');
  }

  // getRole() {
    //this.personService.findByEmail(this.user.email).subscribe((response: User[]) => {
      //let userRow = response.json(); find out how to get this to work? idk if theres a better way or something
      //this.role = userRow   not sure exactly what this is going to look like yet
    //});
  // }

  isAuthenticated() {
    return this.authenticated;
  }

}