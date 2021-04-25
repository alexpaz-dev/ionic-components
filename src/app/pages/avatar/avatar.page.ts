import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

  description: string;

  constructor() { }

  ngOnInit() {
    this.description = "Avatars are circular components that usually wrap an image or icon. They can be used to represent a person or an object.";
  }

}
