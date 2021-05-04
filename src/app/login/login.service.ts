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
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authenticated = false;
  public username: string;
  public token: string;
  role;
  private user: RosefireUser;

  constructor(private router: Router, private personService: UserService, private http: HttpClient) { }

  login() {
    Rosefire.signIn(environment.registryToken, (error, rfUser: RosefireUser) => {
      if (error) {
        // login failed
        console.error(error);
        return;
      } else {
        this.user = rfUser;
        this.username = rfUser.username;
        this.token = rfUser.token;
        this.role = "Health Services";
        this.authenticated = true;
        console.log(rfUser.name);
        console.log(this.role);
        this.router.navigateByUrl('/dashboard');
      }
    });
  }

  public logout() {
    this.authenticated = false;
    this.token = null;
    this.router.navigateByUrl('/login');
  }

  getRole() {
    this.personService.findByEmail(this.user.email).subscribe((response: User[]) => {
      this.role = response[0].role.role;
    });
  }

  isAuthenticated() {
    return this.authenticated;
  }

  roleIsPerson() {
    return this.role === 'Person';
  }

  roleIsHealthServices() {
    return this.role === 'Health Services';
  }

  roleIsTracer() {
    return this.role === 'Contact Tracer';
  }

  roleIsHeadTracer() {
    return this.role === 'Head Contact Tracer';
  }

  roleIsStudentAffairs() { //this should be split into support staff and head support staff
    return this.role === 'Student Affairs';
  }

  roleIsAdmin() {
    return this.role === 'System Admin';
  }

  roleIsUnspecified() {
    return this.role === 'Role Unspecified';
  }

}