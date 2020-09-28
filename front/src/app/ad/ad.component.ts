import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss']
})
export class AdComponent implements OnInit {

  adForm: FormGroup;
  items: FormArray;
  errorMsg = "";
  edited = false;
  startDate: any;
  endDate: any;

  public animalTypes: string[];

  public animalsList: any[] = [{
    id: '',
    animalType: '',
    animalName: '',
    indication: ''
  }];

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient,
    private _location: Location) {
    this.animalTypes = ["Dog", 'Cat', 'Bird', 'Rabbit', 'Fish', 'Farm', 'Exotic_light', 'Exotic_warn'];
    this.adForm = this.formBuilder.group({
      title: '',
      address: '',
      jobPlace: '',
      startDate: '',
      endDate: '',
      ownerId: this.getUserIdInToken(),
      animals: this.formBuilder.array([this.createItem()])
    });

  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      animalType: [''],
      animalName: [''],
      indication: ['']
    });
  }

  addItem(): void {
    this.items = this.adForm.get('animals') as FormArray;
    this.items.push(this.createItem());
  }

  addAnimal() {
    const control = <FormArray>this.adForm.get('animals');
    control.push(this.createItem());
  }
  removeAnimal(i: number) {
    const control = <FormArray>this.adForm.get('animals');
    control.removeAt(i);
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
      (document.getElementById("address") as HTMLButtonElement).value = '';
    }
  }
  onRadioChange2(evt) {
    var target = evt.target;
    if (target.checked) {
      console.log('chez l annonceur clicked');

      (document.getElementById("address") as HTMLButtonElement).disabled = false;
    }
  }

  submit() {
    console.log(this.adForm.value);
    console.log(this.animalsList);
    
    const httpOptions = {
    headers : new HttpHeaders()
      .set("Authorization", "Bearer "+ sessionStorage.getItem("accessToken"))
      .set("Content-Type", "application/json")
    };

    this.httpClient
      .post('http://localhost:8081/api/announcements/create', this.adForm.value, httpOptions)
      .subscribe(
        (data) => {
          console.log(data);
          document.getElementById("alertMsg").setAttribute("style", "display:block;");
          this.errorMsg = "Registered done";
          document.getElementById("alertMsg").classList.add("alert-success");
          document.getElementById("alertMsg").classList.remove('alert-danger');
          //this.adForm.reset();
          this.edited = true;
        },
        (error) => {
          console.log(error);
          document.getElementById("alertMsg").setAttribute("style", "display:block;");
          this.errorMsg = "Error";
          document.getElementById("alertMsg").classList.add('alert-danger');
          document.getElementById("alertMsg").classList.remove("alert-success");
        }
      );
        
      /*
    var axios = require('axios');
    var data = this.adForm.value;

    var config = {
      method: 'post',
      url: 'http://localhost:8081/api/announcements/create',
      headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken"),
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      }); */
  } 
  getUserIdInToken() {
    const token = sessionStorage.getItem("accessToken");
    var decoded = jwt_decode(token);

    return decoded.userId;
  }

}
