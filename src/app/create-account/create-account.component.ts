import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  profilForm = new FormGroup({
    username : new FormControl(''),
    email : new FormControl(''),
    pwd : new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }


  onSubmit() {

    // TODO: Use EventEmitter with form value

    console.warn(this.profilForm.value);

  }

}
