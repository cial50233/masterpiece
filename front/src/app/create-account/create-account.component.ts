import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  constructor(private httpClient: HttpClient, private userService: UserService, private router: RouterModule) { }

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

  profilForm = new FormGroup({
    //username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });


  public onSubmit({ value, valid }: { value: UserInfo, valid: boolean }) {
    this.user = value;alert('onSubmit');
    console.log(this.user);
    console.log("valid: " + valid);
    this.userService.saveUserToServer();
  }

}