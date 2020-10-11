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

  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

  ngOnInit() {
    if (sessionStorage.getItem("accessToken")) {
      if (this.tokenExpired(sessionStorage.getItem("accessToken"))) {
        this.logout();
        console.log("Token has expired");
      } else {
        const expiry = (JSON.parse(atob(sessionStorage.getItem("accessToken").split('.')[1]))).exp;

        console.log("Token has valid expires in : " + (expiry - Math.floor((new Date).getTime() / 1000)) + " sec");
      }
    }
  }

  isLogged() {
    return this.authenticationService.isLogged();
  }

  logout() {
    //this.authenticationService.logout();
    const dialogRef = this.dialog.open(DialogBoxConfirm, {
      width: '350px',
      data: { username: this.username, email: this.email }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
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
        self.username = "Not connected";
        self.email = "Not connected";
        self.logout();
      });


    const dialogRef = this.dialog.open(DialogBox, {
      width: '350px'
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
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onOkClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'dialog-box-confirm',
  templateUrl: 'dialog-box-confirm.html',
})
export class DialogBoxConfirm {

  constructor(
    public dialogRef: MatDialogRef<DialogBoxConfirm>,
    private authenticationService: AuthenticationService) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  
  onOkClick(): void {
    this.authenticationService.logout();
    this.dialogRef.close();
  }

}
