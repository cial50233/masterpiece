import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

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

  public animals: any[] = [{
    id: 1,
    animalType: '',
    animalName: '',
    comment: ''
  }];

  constructor(private formBuilder: FormBuilder,
    private _location: Location) {
    this.animalTypes = ["Dog", 'Cat', 'Fish', 'Farm', 'Exotic light', 'Exotic warn'];
    this.adForm = this.formBuilder.group({
      adr: '',
      animalType: '',
      animalName: '',
      comment: ''
    });

  }
  ngOnInit(): void {
  }

  onReset() {
    this.adForm.reset();
  }

  onReturn() {
    this._location.back();
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

  addAnimal(){
    this.animals.push({
      id: this.animals.length + 1,
      animalType: '',
      animalName: '',
      comment: ''
    });

  }

  removeAnimal(i: number) {
    this.animals.splice(i, 1);
  }

  submit(){
    console.log(this.animals)
  }

}
