import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-subfilters-column',
  templateUrl: './subfilters-column.component.html',
  styleUrls: ['./subfilters-column.component.scss']
})
export class SubfiltersColumnComponent implements OnInit, OnChanges {

  showBikeOptions: boolean = false;
  showFrameOptions: boolean = false;
  showSuspensionOptions: boolean = false;
  showBrakeOptions: boolean = false;
  showTyresOptions: boolean = false;
  showDrivetrainOptions: boolean = false;
  showSteeringOptions: boolean = false;
  showSeatOptions: boolean = false;
  showPedalsOptions: boolean = false;
  showAccessoriesOptions: boolean = false;

  @Input() checkedValueFromFilters: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const value = this.checkedValueFromFilters;
    switch (value) {
      case 'bike':
        this.showBikeOptions = true;
        break;
      case 'frame':
        this.showFrameOptions = true;
        break;
      case 'suspension':
        this.showSuspensionOptions = true;
        break;
      case 'brakes':
        this.showBrakeOptions = true;
        break;
      case 'wheelsAndTyres':
        this.showTyresOptions = true;
        break;
      case 'drivetrain':
        this.showDrivetrainOptions = true;
        break;
      case 'steering':
        this.showSteeringOptions = true;
        break;
      case 'seat':
        this.showSeatOptions = true;
        break;
      case 'pedals':
        this.showPedalsOptions = true;
        break;
      case 'accessories':
        this.showAccessoriesOptions = true;
        break;
    }
  }

}
