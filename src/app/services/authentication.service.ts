import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationService {

    apiUrl = environment.apiUrl;

  private headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
  });

  constructor(private http:Http,private router: Router) { }

  login(username: string, password: string) {
    return this.http.post(this.apiUrl+'login', JSON.stringify({ email: username, password: password }), {headers: this.headers})
        .map((response: Response) => {
          // login successful if there's a jwt token in the response
            console.log(response.json());
          let user = response.json();

          if (user.status && user.user.id) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user.data));
              this.router.navigate(['/home']);
          }
        });
  }

  logout():void {
    // remove user from local storage to log user out
      this.router.navigate(['/home']);
      localStorage.removeItem('currentUser');

  }
}
