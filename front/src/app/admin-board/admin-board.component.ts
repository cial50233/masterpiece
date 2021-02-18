import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TransfereService } from '../services/transfere.service';
import jwt_decode from "jwt-decode";

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
  constructor(private httpClient: HttpClient, private tranfereService: TransfereService) { }

  ngOnInit(): void {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://localhost:8081/api/admin/users',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")
      }
    };
    let self = this;
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        self.users = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  open(e) {

    this.tranfereService.setData(e);

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

}
