import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../_helpers/must-match.validator';
import { ValidationService } from './../services/validation.service';
import { Token } from "../token"
import { AuthenticationService } from 'src/app/services/authentication.service';
import axios from 'axios';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";


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

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, ValidationService.userNameValidator]],
      password: ['', [Validators.required, ValidationService.passwordValidator]],
      grant_type: [this.grant_type],
      client_id: [this.client_id]
    });
  }

  ngOnInit() {
  }

  logIn() {

    const url = "http://localhost:8081/oauth/token";
    const headers = new HttpHeaders().set(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    const axios = require('axios');
    const qs = require('qs');
    const data = qs.stringify({
      'grant_type': 'password',
      'username': username,
      'password': password,
      'client_id': 'masterpiece-client'
    });
    var config = {
      method: 'post',
      url: url,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        window.sessionStorage.setItem("accessToken", response.data.access_token);
        console.log("Connexion réussie");
        console.log(sessionStorage.getItem("accessToken"));
      })
      .catch(function (error) {
        console.log(error);
      });

    /* 
    this.http.post(url, JSON.stringify(data), { headers }).subscribe(
     (data) => {
       this.loginForm.reset();
       window.sessionStorage.setItem("accessToken", data["access_token"]);
       console.log(data);
       console.log("Connexion réussie");
       this.router.navigate(["/home"]);
     },
     (error) => {
       console.log(error);
       console.log("Connexion echoué");
     }
   );
  
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  
      var urlencoded = new URLSearchParams();
      urlencoded.append("grant_type", "password");
      urlencoded.append("username", username);
      urlencoded.append("password", password);
      urlencoded.append("client_id", "masterpiece-client");
  
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded
      };
  
      fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result)
          window.sessionStorage.setItem("accessToken", JSON.stringify(result));
          console.log("Connexion réussie");
          console.log(sessionStorage.getItem("accessToken"));
          this.router.navigate(['/login']);
        })
        .catch(error => console.log('error', error));
  
        
        this.authService.logIn(this.loginForm).subscribe(
        (data) => {
          console.log(" LoggedIn successful")
        },
        (error) => {
          console.log(error.error);
        })
  */
  }

}
