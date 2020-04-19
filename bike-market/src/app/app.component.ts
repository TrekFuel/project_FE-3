import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bike-market';

  constructor() {
  }

  checkedValue: string;


  onValueChecked(value) {
    this.checkedValue = value;
  }

}
