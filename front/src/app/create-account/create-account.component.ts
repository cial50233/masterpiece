import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { ValidationService } from './../services/validation.service';
import { Location } from '@angular/common';
import { AuthenticationService } from 'src/app/services/authentication.service'

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  edited = this.authenticationService.isLogged();
  submitted = false;
  profilForm: FormGroup;
  errorMsg = "";

  constructor(private formBuilder: FormBuilder,private httpClient: HttpClient,private _location: Location,
    private authenticationService: AuthenticationService){
    this.profilForm = this.formBuilder.group({
      username: ['', [Validators.required, ValidationService.userNameValidator]],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', [Validators.required, ValidationService.passwordValidator]]
    });
  }

  ngOnInit() {
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

  public saveUser() {
    this.submitted = true;
    const url = 'http://localhost:8081/api/accounts/create/';
    const axios = require('axios');
    var config = {
      method: 'post',
      url: url,
      data: this.profilForm.value
    };
    let self = this;
    axios(config)
      .then(function (response) {
        console.log(response);
          document.getElementById("alertMsg").setAttribute("style", "display:block;");
          self.errorMsg = "Registered done";
          document.getElementById("alertMsg").classList.add("alert-success");
          document.getElementById("alertMsg").classList.remove('alert-danger');
          self.edited = true;
          self.goLog(self.profilForm.value.username, self.profilForm.value.password);
      })
      .catch(function (error) {
        console.log(error);
        document.getElementById("alertMsg").setAttribute("style", "display:block;");
        self.errorMsg = "User already registered";
          document.getElementById("alertMsg").classList.add('alert-danger');
          document.getElementById("alertMsg").classList.remove("alert-success");
      });
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
        window.sessionStorage.setItem("accessToken", response.data.access_token);
        console.log("Connexion réussie");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}