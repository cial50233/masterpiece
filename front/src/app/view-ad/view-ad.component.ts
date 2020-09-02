import { Component, OnInit, Input } from '@angular/core';
import { TransfereService } from '../services/transfere.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-ad',
  templateUrl: './view-ad.component.html',
  styleUrls: ['./view-ad.component.scss']
})
export class ViewAdComponent implements OnInit {
 

  announcement = this.transfereService.getData();

  constructor(private transfereService : TransfereService, private location: Location) { }

  ngOnInit(): void {
   
    
  }

  onReturn() {
    this.location.back();
  }

}
