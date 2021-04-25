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
      icon: 'star',
      name: 'Alerts',
      color: 'medium',
      redirecTo: '/alert',
    },
    {
      icon: 'star',
      name: 'Action Sheets',
      color: 'medium',
      redirecTo: '/action-sheet',
    },
    {
      icon: 'star',
      name: 'Avatars',
      color: 'medium',
      redirecTo: '/avatar',
    },
    {
      icon: 'star',
      name: 'Buttons',
      color: 'medium',
      redirecTo: '/button',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
