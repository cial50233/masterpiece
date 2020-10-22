import { Component, OnInit, Input } from '@angular/core';
import { TransfereService } from '../services/transfere.service';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-view-ad',
  templateUrl: './view-ad.component.html',
  styleUrls: ['./view-ad.component.scss']
})
export class ViewAdComponent implements OnInit {

  errorMsg = "";
  edited = false;
  btnEditHide = true;
  btnDeleteHide = true;
  announcement = this.transfereService.getData();

  constructor(
    private transfereService: TransfereService,
    private location: Location,
    private httpClient: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.announcement.ownerId);
    if (this.getUserRoleInToken() == "ROLE_ADMIN" || this.getUserIdInToken() == this.announcement.ownerId) {

      //console.log(this.getUserIdInToken());
      this.btnEditHide = false;
      this.btnDeleteHide = false;
    }

  }

  onReturn() {
    this.location.back();
  }


  delete(id) {
    this.httpClient
      .delete('http://localhost:8081/api/announcements/' + id)
      .subscribe(
        (data) => {
          console.log(data);
          document.getElementById("alertMsg").setAttribute("style", "display:block;");
          this.errorMsg = "Deleted";
          document.getElementById("alertMsg").classList.add("alert-success");
          document.getElementById("alertMsg").classList.remove('alert-danger');
          document.getElementById("deleteBtn").setAttribute("style", "display:none;");
          this.edited = true;
          this.btnEditHide = true;
          this.btnDeleteHide = true;
        },
        (error) => {
          console.log(error);
          document.getElementById("alertMsg").setAttribute("style", "display:block;");
          this.errorMsg = "Error";
          document.getElementById("alertMsg").classList.add('alert-danger');
          document.getElementById("alertMsg").classList.remove("alert-success");
        }
      );
  }

  edit(e) {
    this.transfereService.setData(e);
    this.router.navigate(['/ad']);

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
