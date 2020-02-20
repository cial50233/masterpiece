import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserInfo } from '../classes/user-info';
import { UserService } from '../services/user.service';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  private user: UserInfo;

  submitted = false;

  profilForm = this.formBuilder.group({

    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
  returnControl = this.profilForm.controls;
  
  constructor(private formBuilder : FormBuilder, private httpClient: HttpClient, private userService: UserService, private router: RouterModule) { }

  ngOnInit() {

    //this.user = new UserInfo({ email: "", password: { pwd: "", confirm_pwd: "" } });
    this.user = new UserInfo({ email: "", password: "" });

  }



  public onFormSubmit({ value, valid }: { value: UserInfo, valid: boolean }) {
    let headers = new HttpHeaders()
    .set("access-control-allow-origin", "http://localhost:8081")
    .set("Access-Control-Request-Method", "GET,HEAD,PUT,PATCH,POST,DELETE")
    .set("Content-Type", "application/json");
    alert('onFormSubmit');
    this.httpClient
      .post('http://localhost:8081/user/create/', JSON.stringify(this.user),  { headers })
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

 

  public onSubmit({ value, valid }: { value: UserInfo, valid: boolean }) {
    this.user = value;alert('onSubmit');
    console.log(this.user);
    console.log("valid: " + valid);
    this.userService.saveUserToServer();
    if (this.profilForm.valid) {
      alert(
        `Email: ${this.profilForm.value.email} Password: ${this.profilForm.value.password}`
      );
    }
  }

  public saveUser(){

    this.submitted = true;

    // stop here if form is invalid
    if (this.profilForm.invalid) {
        return;
    }

    // display form values on success
    alert("OK");
   // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    
  }

  onReset() {
    this.submitted = false;
    this.profilForm.reset();
}

}