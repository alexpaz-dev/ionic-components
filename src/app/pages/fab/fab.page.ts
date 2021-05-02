import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {

  description: string;

  dataList= Array(50);

  constructor() { }

  ngOnInit() {
    this.description="Fabs are container elements that contain one or more fab buttons. They should be placed in a fixed position that does not scroll with the content.";
  }

}
