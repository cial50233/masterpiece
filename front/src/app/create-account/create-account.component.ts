import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserInfo } from '../classes/user-info';
import { UserService } from '../services/user.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  private user: UserInfo;

  constructor(private userService: UserService, private router: RouterModule) { }

  ngOnInit() {

    //this.user = new UserInfo({ email: "", password: { pwd: "", confirm_pwd: "" } });
    this.user = new UserInfo({ email: "", password: "" });
  }

  public onFormSubmit({ value, valid }: { value: UserInfo, valid: boolean }) {
    this.user = value;
    console.log(this.user);
    console.log("valid: " + valid);
    this.userService.saveUserToServer();
  }

  profilForm = new FormGroup({
    //username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  createForm() {
    let pwd = this.Password.value;

    let confirmPwd = this.Password.value;

    this.profilForm.value;

  }

  get Password() {

    return this.profilForm.get('pwd');

  }

}