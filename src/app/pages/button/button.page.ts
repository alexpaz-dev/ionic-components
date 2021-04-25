import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {

  description: string;

  constructor() { }

  ngOnInit() {
    this.description="Buttons provide a clickable element, which can be used in forms, or anywhere that needs simple, standard button functionality.";
  }

}
