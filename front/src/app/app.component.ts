import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData {
  username: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Find Around';
  username: string;
  email: string;

  constructor(
    private translate: TranslateService,
    private authenticationService: AuthenticationService,
    public dialog: MatDialog) { }

  setLang(language: string) {
    this.translate.use(language);
  }
/*
  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }
*/
  ngOnInit() {
  /*  if (this.tokenExpired(sessionStorage.getItem("accessToken"))) {
      this.authenticationService.isLogged();
      console.log("Token has expired");
    } else {
      // token valid
    }*/
  }

  isLogged() {
    return this.authenticationService.isLogged();
  }

  logout() {
    this.authenticationService.logout();
  }

  getUserInfo() {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://localhost:8081/api/userInfo',
      headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken"),
        'Content-Type': 'application/json'
      }
    };
    let self = this
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        self.username = response.data.username;
        self.email = response.data.email;
      })
      .catch(function (error) {
        console.log(error);
      });


    const dialogRef = this.dialog.open(DialogBox, {
      width: '350px',
      data: {username: this.username, email: this.email}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}

@Component({
  selector: 'dialog-box',
  templateUrl: 'dialog-box.html',
})
export class DialogBox {

  constructor(
    public dialogRef: MatDialogRef<DialogBox>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onOkClick(): void {
    this.dialogRef.close();
  }

}
