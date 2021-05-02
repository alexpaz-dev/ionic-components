import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  description: string;

  dafaultDate: Date = new Date();

  customYearValues = [2020, 2010, 2000, 1990, 1987];

  customPickerOptions = {
    buttons: [
      {
        text: 'Cancel?',
        handler: ( event ) => {
          console.log(event);
        }
      },
      {
        text: 'Perfect',
        handler: ( event ) => {
          console.log(event);
        },
      }
    ]
  }

  constructor() { }

  ngOnInit() {
    this.description="Datetimes present a picker interface from the bottom of a page, making it easy for users to select dates and times.";
  }

  dateChanged( event ){
    console.log('New date: ' + event.detail.value);
  }

}
