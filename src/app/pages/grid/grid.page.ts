import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
})
export class GridPage implements OnInit {

  description: string;

  constructor() { }

  ngOnInit() {
    this.description = "The grid is a powerful mobile-first flexbox system for building custom layouts.";
  }

}
