import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss']
})
export class AdComponent implements OnInit {

  adForm: any;
  errorMsg = "";

  startDate: any;
  endDate: any;

  public animalTypes: string[];

  public animals: any[] = [{
    id: '',
    animalType: '',
    animalName: '',
    indication: ''
  }];

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient,
    private _location: Location) {
    this.animalTypes = ["Dog", 'Cat', 'Fish', 'Farm', 'Exotic light', 'Exotic warn'];
    this.adForm = this.formBuilder.group({
      title: '',
      address: '',
      jobPlace: '',
      startDate: '',
      endDate: '',
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
    console.log(this.adForm.value);
    console.log(this.animals);



    let headers = new HttpHeaders()
    .set("access-control-allow-origin", "http://localhost:8081")
    .set("Access-Control-Request-Method", "POST")
    .set("Content-Type", "application/json");

  this.httpClient
    .post('http://localhost:8081/announcements/create', this.adForm.value, { headers })
    .subscribe(
      (data) => {
        console.log(data);
        document.getElementById("alertMsg").setAttribute("style", "display:block;");
        this.errorMsg = "Registered done";
        document.getElementById("alertMsg").classList.add("alert-success");
        document.getElementById("alertMsg").classList.remove('alert-danger');
        //this.profilForm.reset();
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

}
