import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinitescroll',
  templateUrl: './infinitescroll.page.html',
  styleUrls: ['./infinitescroll.page.scss'],
})
export class InfinitescrollPage implements OnInit {

  description: string;

  data: any[] = Array(30);

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
    this.description = "The Infinite Scroll component calls an action to be performed when the user scrolls a specified distance from the bottom or top of the page.";
  }

  loadData(event){
    console.log(event);

    if (this.data.length > 60) {
      this.infiniteScroll.complete();
      this.infiniteScroll.disabled = true;
      return;
    }

    // Para apreciar el cargado de datos, esperamos 2 segundos
    setTimeout(() => {
      const newElements = Array(15);

      this.data.push(...newElements);
      this.infiniteScroll.complete();
    }, 2000);
  }

}
