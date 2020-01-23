import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {


  username = new FormControl('');
  email = new FormControl('');
  pwd = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

}
