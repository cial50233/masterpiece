import { Component, OnInit, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { RouterModule, Routes } from '@angular/router';
import { TransfereService } from '../services/transfere.service';

@Component({
  selector: 'app-mini-ads',
  templateUrl: './mini-ads.component.html',
  styleUrls: ['./mini-ads.component.scss']
})
export class MiniAdsComponent implements OnInit {

  public adverts = [];
  public ads = [];
  // Pagination parameters.
  p: number = 1;
  count: number = 4;
  constructor(private httpClient: HttpClient, private dataService: DataService, private transfereService : TransfereService) {

  }

  ngOnInit(): void {

    this.dataService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.adverts = data;
    });
  }

  open(e){

    this.transfereService.setData(e);
    
  }

}
