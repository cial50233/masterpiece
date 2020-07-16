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
    indication: ''
  }];

  constructor(private formBuilder: FormBuilder,
    private _location: Location) {
    this.animalTypes = ["Dog", 'Cat', 'Fish', 'Farm', 'Exotic light', 'Exotic warn'];
    this.adForm = this.formBuilder.group({
      address: '',
      animalType: '',
      animalName: '',
      indication: ''
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
      console.log('chez le jobber clicked');
      (document.getElementById("address") as HTMLButtonElement).disabled = true;
    } 
  }
  onRadioChange2(evt) {
    var target = evt.target;
    if (target.checked) {
      console.log('chez l annonceur clicked');

      (document.getElementById("address") as HTMLButtonElement).disabled = false;
    }
  }

  addAnimal(){
    this.animals.push({
      id: this.animals.length + 1,
      animalType: '',
      animalName: '',
      indication: ''
    });

  }

  removeAnimal(i: number) {
    this.animals.splice(i, 1);
  }

  submit(){
    console.log(this.animals)
  }

}
