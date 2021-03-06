import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserInfo } from '../classes/user-info';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ValidationService } from './../services/validation.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  private user: UserInfo;
  edited = false;
  submitted = false;
  profilForm: FormGroup;
  errorMsg = "";

  constructor(private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private _location: Location
    ) {
    this.profilForm = this.formBuilder.group({
      username: ['', [Validators.required, ValidationService.userNameValidator]],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', [Validators.required, ValidationService.passwordValidator]]
    });
  }

  ngOnInit() {
  }

  public saveUser() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.profilForm.invalid) {
      alert("Not OK");
      return;
    }

    let user = {

      "id": "",
      "username": this.profilForm.value.username,
      "email": this.profilForm.value.email,
      "password": this.profilForm.value.password

    }
    console.log(this.profilForm.value);
    console.log(user);
    let headers = new HttpHeaders()
      .set("access-control-allow-origin", "http://localhost:8081")
      .set("Access-Control-Request-Method", "GET,HEAD,PUT,PATCH,POST,DELETE")
      .set("Content-Type", "application/json");

    this.httpClient
      .post('http://localhost:8081/api/accounts/create/', this.profilForm.value)
      .subscribe(
        (data) => {
          console.log(data);
          document.getElementById("alertMsg").setAttribute("style", "display:block;");
          this.errorMsg = "Registered done";
          document.getElementById("alertMsg").classList.add("alert-success");
          document.getElementById("alertMsg").classList.remove('alert-danger');
          //this.profilForm.reset();
          this.edited = true;
          this.goLog(this.profilForm.value.username, this.profilForm.value.password);
        },
        (error) => {
          console.log(error);
          document.getElementById("alertMsg").setAttribute("style", "display:block;");
          this.errorMsg = "User already registered";
          document.getElementById("alertMsg").classList.add('alert-danger');
          document.getElementById("alertMsg").classList.remove("alert-success");
        }
      );

  }

  onReset() {
    this.submitted = false;
    (document.getElementById("username") as HTMLButtonElement).value = '';
    (document.getElementById("email") as HTMLButtonElement).value = '';
    (document.getElementById("password") as HTMLButtonElement).value = '';
  }

  onReturn() {
    this._location.back();
  }

  goLog(username, password){
    const url = "http://localhost:8081/oauth/token";
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
    
  }

}