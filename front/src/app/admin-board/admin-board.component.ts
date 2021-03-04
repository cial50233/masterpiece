import { Component, OnInit, Inject } from '@angular/core';
import { TransfereService } from '../services/transfere.service';
import jwt_decode from "jwt-decode";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.scss']
})
export class AdminBoardComponent implements OnInit {

  public users = [];
  // Pagination parameters.
  p: number = 1;
  count: number = 12;

  axios = require('axios');
  errorMsg = "";
  btnDeleteHide = true;

  constructor(private tranfereService: TransfereService, public dialog: MatDialog) { }

  ngOnInit(): void {
    
    var config = {
      method: 'get',
      url: 'http://localhost:8081/api/admin/users',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")
      }
    };
    let self = this;
    self.axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        self.users = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

      if (this.getUserRoleInToken() == "ROLE_ADMIN") {
        this.btnDeleteHide = false;
      }
  }


  open(e) {

    this.tranfereService.setData(e);

  }

  delete(id, username) {

    const dialogRef = this.dialog.open(DialogBoxConfirm, {
      width: '350px',
      data: { username: username, id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
    
    });
  }

  getUserIdInToken() {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      var decoded = jwt_decode(token);
      return decoded.userId;
    } else {
      return false;
    }
  }

  getUserRoleInToken() {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      var decoded = jwt_decode(token);
      return decoded.authorities;
    } else {
      return false;
    }
  }
  

}
export interface DialogData {
  username: string;
  id: string;
}
@Component({
  selector: 'dial-confirm',
  templateUrl: 'dial-confirm.html',
})
export class DialogBoxConfirm {

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogBoxConfirm>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onOkClick(id): void {
    var axios = require('axios');
    var config = {
      method: 'delete',
      url: 'http://localhost:8081/api/admin/' + id,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")
      }
    };
    let self = this;
    axios(config)
      .then(function (response) {
        const dialogRefInfo = self.dialog.open(DialogBoxConfirmInfo, {
          width: '350px'
        });
        
      })
      .catch(function (error) {
        console.log(error);
      });
    this.dialogRef.close();
  }
}

@Component({
  selector: 'dial-confirm-info',
  templateUrl: 'dial-confirm-info.html',
})
export class DialogBoxConfirmInfo {

  constructor(
    public dialogRefInfo: MatDialogRef<DialogBoxConfirmInfo>) { }

  onOkClick(): void {
    window.location.reload();
    this.dialogRefInfo.close();
  }

}
