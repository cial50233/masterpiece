import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../_helpers/must-match.validator';
import { ValidationService } from './../services/validation.service';
import { Token } from "../token"
import { AuthenticationService } from 'src/app/services/authentication.service';
import axios from 'axios';
import { HttpClient, HttpHeaders } from "@angular/common/http";


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

  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService, private http: HttpClient) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, ValidationService.userNameValidator]],
      password: ['', [Validators.required, ValidationService.passwordValidator]],
      grant_type: [this.grant_type],
      client_id: [this.client_id]
    });
  }

  ngOnInit() {
  }
  public logIn() {

    /*  this.authService.logIn(this.loginForm).subscribe(
        (data) => {
          console.log(" LoggedIn successful")
        },
        (error) => {
          console.log(error.error);
        })
  */
    const url = "http://localhost:8081/oauth/token";
    const headers = new HttpHeaders().set(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    console.log(username);

    const data = Object.keys(this.loginForm.value)
      .map((key) => key + "=" + this.loginForm.value[key])
      .join("&");
    console.log(JSON.stringify(this.loginForm.value));
    console.log(this.loginForm.value);
    var config = {

      url: `http://localhost:8081/oauth/token`,
      data: data,
      headers: {}
    };

  /*  axios.post(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        localStorage.setItem("access_token", response.data.access_token)
      })
      .catch(function (error) {
        console.log(error);
      });

      */

     this.http.post(url, this.loginForm.value, { headers }).subscribe(
      (data) => {
        this.loginForm.reset();
        window.sessionStorage.setItem("accessToken", data["access_token"]);
        console.log(data);
        console.log("Connexion réussie");
 
      },
      (error) => {
        console.log(error);
        console.log("Connexion echoué");
      }
    );
  }

}
