import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../_helpers/must-match.validator';
import { ValidationService } from './../services/validation.service';
import { Token } from "../token"
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private grant_type: string = "password";
  private client_id: string = "masterpiece-client"

  submitted = false;
  loginForm: FormGroup;

  // returnControl = this.loginForm.controls;

  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, ValidationService.userNameValidator]],
      password: ['', [Validators.required, ValidationService.passwordValidator]],
      grant_type:[this.grant_type],
      client_id:[this.client_id]
    });
  }

  ngOnInit() {
  }
  public logIn() {

    this.authService.logIn(this.loginForm).subscribe(
      (data) => {
        console.log(" LoggedIn successful")
      },
      (error) => {
        console.log(error.error);
      })

  }

}
