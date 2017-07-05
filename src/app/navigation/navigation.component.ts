import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  showLogin:Boolean;
  showLogout:Boolean;
  constructor(private authenticateService:AuthenticationService) {
      if(localStorage.getItem('currentUser')){
        this.showLogin = false;
        this.showLogout = true;
      } else {
        this.showLogin = true;
        this.showLogout = false;
      }

  }

  ngOnInit() {
  }

}
