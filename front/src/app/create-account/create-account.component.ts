import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserInfo } from '../classes/user-info';
import { UserService } from '../services/user.service';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ValidationService } from './../services/validation.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  private user: UserInfo;

  submitted = false;
  profilForm: any;

  //returnControl = this.profilForm.controls;
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private userService: UserService, private router: RouterModule) {
    this.profilForm = this.formBuilder.group({

      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', [Validators.required, ValidationService.passwordValidator]]
    });
  }

  ngOnInit() {
  }



  /* public onFormSubmit({ value, valid }: { value: UserInfo, valid: boolean }) {
     let headers = new HttpHeaders()
       .set("access-control-allow-origin", "http://localhost:8081")
       .set("Access-Control-Request-Method", "GET,HEAD,PUT,PATCH,POST,DELETE")
       .set("Content-Type", "application/json");
     alert('onFormSubmit');
     this.httpClient
       .post('http://localhost:8081/user/create/', JSON.stringify(this.user), { headers })
       .subscribe(
         () => {
           console.log('Enregistrement terminé !');
         },
         (error) => {
           console.log('Erreur ! : ' + error);
         }
       );
   } */


  public onSubmit({ value, valid }: { value: UserInfo, valid: boolean }) {
    this.user = value; alert('onSubmit');
    console.log(this.user);
    console.log("valid: " + valid);
    this.userService.saveUserToServer();
    if (this.profilForm.valid) {
      alert(
        `Email: ${this.profilForm.value.email} Password: ${this.profilForm.value.password}`
      );
    }
  }

  public saveUser() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.profilForm.invalid) {
      alert("Not OK");
      return;
    }

    let user = {

      "id":"",
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
      .post('http://localhost:8081/user/create/', this.profilForm.value, { headers })
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );

  }

  onReset() {
    this.submitted = false;
    this.profilForm.reset();
  }

}