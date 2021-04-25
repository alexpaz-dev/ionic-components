import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string = '';
  @Input() color: string = '';

  @Input() endButtonIcon1: string = '';
  @Input() endButtonIcon2: string = '';

  icon1: string = '';
  icon2: string = '';

  endButtonClicked: boolean = false;

  constructor() { }

  ngOnInit() {
    this.icon1 = this.endButtonIcon1;
    this.icon2 = this.endButtonIcon2;
  }

  onClickEndButton(){
    this.endButtonClicked = !this.endButtonClicked;
  }
}
