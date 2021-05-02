import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  description: string;

  text: string;

  public pizza = [
    { val: 'Pepperoni', isChecked: true, color: "success", },
    { val: 'Sausage', isChecked: false, color: "light", },
    { val: 'Mushroom', isChecked: false, color: "dark", },
    { val: 'Tomato', isChecked: false, color: "danger", },
  ];

  constructor() { }

  ngOnInit() {
    this.description="Checkboxes allow the selection of multiple options from a set of options.";
  }
  
  onClick( item: any) {
    console.log(item);
  }

  showData() {
    console.log(this.pizza);
    this.text = JSON.stringify(this.pizza) ;
  }
}
