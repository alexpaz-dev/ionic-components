import { Component, OnInit } from '@angular/core';

interface Item {
  icon: string;
  name: string;
  color: string,
  redirecTo: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  listItems: Item[] = [
    {
      icon: 'logo-whatsapp',
      name: 'Whatsapp',
      color: 'success',
      redirecTo: '/alert',
    },
    {
      icon: 'logo-playstation',
      name: 'Playstation',
      color: 'primary',
      redirecTo: '/action-sheet',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
