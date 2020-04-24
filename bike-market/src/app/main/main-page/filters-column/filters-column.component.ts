import {
  Component, EventEmitter,
  OnInit, Output,
} from '@angular/core';

@Component({
  selector: 'app-filters-column',
  templateUrl: './filters-column.component.html',
  styleUrls: ['./filters-column.component.scss']
})

export class FiltersColumnComponent implements OnInit {

  @Output() valueChecked: EventEmitter<any> = new EventEmitter<any>();
  show: boolean = true;

  filtersArr: object[] = [
    {value: 'bike', id: 'bike', label: 'Байк'},
    {value: 'frame', id: 'frame', label: 'Рама'},
    {value: 'suspension', id: 'suspension', label: 'Подвеска'},
    {value: 'brakes', id: 'brakes', label: 'Тормоза'},
    {value: 'wheelsAndTyres', id: 'wheelsAndTyres', label: 'Колеса и резина'},
    {value: 'drivetrain', id: 'drivetrain', label: 'Привод'},
    {value: 'steering', id: 'steering', label: 'Управление'},
    {value: 'seat', id: 'seat', label: 'Сидение'},
    {value: 'pedals', id: 'pedals', label: 'Педали'},
    {value: 'accessories', id: 'accessories', label: 'Аксессуары'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onChecked(event) {
    if (event.target.checked) {
      this.show = false;
      this.valueChecked.emit(event.target.value);
    }
  }

}
