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

  submitted = false;
  profilForm: FormGroup;
  errorMsg = "";

  constructor(private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: RouterModule,
    private _location: Location) {
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
      .post('http://localhost:8081/api/accounts/create/', this.profilForm.value, { headers })
      .subscribe(
        (data) => {
          console.log(data);
          document.getElementById("alertMsg").setAttribute("style", "display:block;");
          this.errorMsg = "Registered done";
          document.getElementById("alertMsg").classList.add("alert-success");
          document.getElementById("alertMsg").classList.remove('alert-danger');
          //this.profilForm.reset();
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
    this.profilForm.reset();
  }

  onReturn() {
    this._location.back();
  }

}