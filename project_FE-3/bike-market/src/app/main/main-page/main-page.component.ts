import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  checkedValue: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  onValueChecked(value) {
    this.checkedValue = value;
  }

}
