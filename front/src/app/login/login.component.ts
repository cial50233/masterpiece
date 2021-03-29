import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from './../services/validation.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private grant_type: string = "password";
  private client_id: string = "masterpiece-client";

  submitted = false;
  loginForm: FormGroup;
  errorMsg = "";
  edited = false;
  msg = true;
  username;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, ValidationService.userNameValidator]],
      password: ['', [Validators.required, ValidationService.passwordValidator]],
      grant_type: [this.grant_type],
      client_id: [this.client_id]
    });
    if(this.authService.isLogged()){
      this.goAway();
    }
  }

  ngOnInit() {
  }

  logIn() {

    const url = "http://localhost:8081/oauth/token";

    this.username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    const axios = require('axios');
    const qs = require('qs');
    const data = qs.stringify({
      'grant_type': 'password',
      'username': this.username,
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
    let self = this;
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        window.sessionStorage.setItem("accessToken", response.data.access_token);
        console.log("Connexion réussie");
        console.log(sessionStorage.getItem("accessToken"));
        document.getElementById("alertMsg").setAttribute("style", "display:none;");
        self.edited = true;
        self.msg = false;
      })
      .catch(function (error) {
        console.log(error);
        console.log("Connexion échoué");
        document.getElementById("alertMsg").setAttribute("style", "display:block;");
        self.errorMsg = "Error";
        document.getElementById("alertMsg").classList.add('alert-danger');
        document.getElementById("alertMsg").classList.remove("alert-success");
      });
  }
  goAway() {
    this.router.navigate(['/home']);
  }
}
