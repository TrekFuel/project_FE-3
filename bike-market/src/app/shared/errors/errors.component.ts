import {Component, OnInit} from '@angular/core';
import {ErrorsService} from './services/errors.service';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent implements OnInit {

  constructor(private errorsService: ErrorsService) {
  }

  _errorFromService$ = this.errorsService.error$;

  ngOnInit(): void {
  }

}
