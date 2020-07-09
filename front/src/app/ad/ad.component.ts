import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss']
})
export class AdComponent implements OnInit {

  adForm: any;

  startDateJson: NgbDateStruct;
  endDateJson: NgbDateStruct;

  public animalTypes: string[];

  constructor() {
    this.animalTypes = ["Dog", 'Cat', 'Fish', 'Farm', 'Exotic light', 'Exotic warn'];


  }
  ngOnInit(): void {
  }
  onRadioChange(evt) {
    var target = evt.target;
    if (target.checked) {
      console.log('ched');
    } else {
      console.log('chedzzzz');
    }
  }
  onRadioChange2(evt) {
    var target = evt.target;
    if (!target.checked) {
      console.log('ched');
    } else {
      console.log('chedzzzz');
    }
  }

}
