import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../_helpers/must-match.validator';
import { ValidationService } from './../services/validation.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted = false;
  loginForm: any;

  // returnControl = this.loginForm.controls;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', [Validators.required, ValidationService.passwordValidator]]
    });
  }

  ngOnInit() {
  }
  public logIn() {

    this.submitted = true;
    //let em = this.loginForm.controls['email'].value;
    //let pass = this.loginForm.get('password').value;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      alert("Not OK : ");
      return;
    }

    // display form values on success
    alert("OK");
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

  }

}
