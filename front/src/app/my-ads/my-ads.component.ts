import { Component, OnInit, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TransfereService } from '../services/transfere.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.scss']
})
export class MyAdsComponent implements OnInit {

  public adverts = [];
  // Pagination parameters.
  p: number = 1;
  count: number = 4;
  constructor(private httpClient: HttpClient, private tranfereService: TransfereService) { }

  ngOnInit(): void {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://localhost:8081/api/announcements/owner/'+this.getUserIdInToken(),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")
      }
    };
    let self = this;
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        self.adverts = response.data;
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
    var decoded = jwt_decode(token);

    return decoded.userId;
  }
}
