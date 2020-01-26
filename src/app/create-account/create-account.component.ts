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

  private userInfo = new UserInfo();

  constructor(private userService: UserService, private router: RouterModule) { }

  ngOnInit() {
  }

  profilForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    pwd: new FormControl('', Validators.required)
  });

  createForm(UserInfos){
    let pwd = this.Password.value;

    let confirmPwd = this.Password.value;

  }

  get Password(){

    return this.profilForm.get('pwd');
  
  }

}