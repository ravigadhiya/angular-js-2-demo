import { Component, OnInit, AfterViewChecked, ViewChild } from '@angular/core';

import {Router} from '@angular/router';
import {NgForm} from "@angular/forms";
import {Registration} from '../registration';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router) { }

  model: any = {};

  registerForm: NgForm;

  @ViewChild('registerForm') currentForm: NgForm;

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    if (this.currentForm === this.registerForm) { return; }
    this.registerForm = this.currentForm;
    if (this.registerForm) {
      this.registerForm.valueChanges
          .subscribe(data => this.onValueChanged(data));
    }
  }

  onValueChanged(data?: any) {
    if (!this.registerForm) { return; }
    const form = this.registerForm.form;

    for (const field in this.formErrors) {

      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      console.log(control);
      //if (control && control.dirty && !control.valid) {
      if (control  && !control.valid) {

        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'fullname': '',
  };

  validationMessages = {
    'fullname': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 4 characters long.',
      'maxlength':     'Name cannot be more than 24 characters long.',
      'forbiddenName': 'Someone named "Bob" cannot be a hero.'
    },
    'emailaddress':{
      'required':      'Email is required.',
    }
  };
  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['/home']);
    }
  }



  onSubmit(){
    //console.log(this.formErrors);
   // console.log(this.model);
  }

}
