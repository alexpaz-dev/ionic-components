import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  description: string;

  name: string;

  user = {
    email: '',
    password: '',
  }

  constructor() { }

  ngOnInit() {
    this.description = "The input component is a wrapper to the HTML input element with custom styling and additional functionality.";
  }

  onSubmit(){
    console.log('SUBMIT!!')
  }

}
