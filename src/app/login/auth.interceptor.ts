import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginService } from './login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private loginService: LoginService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + this.loginService.token,
                'Username': this.loginService.username,
            },
        });

        console.log(req.headers.get('Authorization'));

        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                
                console.log(event.headers.get('Authorization')); //this outputs null
                console.log(event);
                this.loginService.token = event.headers.get('Authorization');
            }
            }, (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        console.error('oof');
                        this.loginService.logout();
                    }
                }
            }
        ));
    }

}