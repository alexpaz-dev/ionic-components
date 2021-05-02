import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  description: string;

  constructor() { }

  ngOnInit() {
    this.description="Cards are a standard piece of UI that serves as an entry point to more detailed information.";
  }

}
