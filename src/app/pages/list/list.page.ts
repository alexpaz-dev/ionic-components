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
      name: 'Alert',
      color: 'medium',
      redirecTo: '/alert',
    },
    {
      icon: 'star',
      name: 'Action Sheet',
      color: 'medium',
      redirecTo: '/action-sheet',
    },
    {
      icon: 'star',
      name: 'Avatar',
      color: 'medium',
      redirecTo: '/avatar',
    },
    {
      icon: 'star',
      name: 'Button',
      color: 'medium',
      redirecTo: '/button',
    },
    {
      icon: 'star',
      name: 'Card',
      color: 'medium',
      redirecTo: '/card',
    },
    {
      icon: 'star',
      name: 'Checkbox',
      color: 'medium',
      redirecTo: '/checkbox',
    },
    {
      icon: 'star',
      name: 'Datetime',
      color: 'medium',
      redirecTo: '/datetime',
    },
    {
      icon: 'star',
      name: 'Fab',
      color: 'medium',
      redirecTo: '/fab',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
