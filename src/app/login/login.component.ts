import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  returnUrl: string;

  constructor( private route: ActivatedRoute,
               private router: Router,
               private authenticationService: AuthenticationService,
               ) { }


  ngOnInit() {

      if (localStorage.getItem('currentUser')) {
          this.router.navigate(['/home']);
      } else {
          // reset login status
          this.authenticationService.logout();

          // get return url from route parameters or default to '/'
          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
      }

  }

  login() {
    console.log(this);
   // this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(
            data => {
              this.router.navigate([this.returnUrl]);
            },
            error => {
              this.router.navigate(['/login']);
              //this.alertService.error(error);
             // this.loading = false;
            });
  }
}
