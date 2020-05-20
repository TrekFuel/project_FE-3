import {Component, OnInit, ViewChild} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators
} from '@angular/forms';
import {Suboption} from '../../shared/suboption.model';
import {FormService} from '../../shared/form.service';
import {ProductsService} from '../../shared/products.service';

@Component({
  selector: 'app-post',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  options: string[] = this.formService.options;

  suboptions: Suboption[];

  bikeOptions: Suboption[] = this.formService.bikeOptions;
  frameOptions: Suboption[] = this.formService.frameOptions;
  suspensionOptions: Suboption[] = this.formService.suspensionOptions;
  brakesOptions: Suboption[] = this.formService.brakesOptions;
  wheelsAndTyresOptions: Suboption[] = this.formService.wheelsAndTyresOptions;
  drivetrainOptions: Suboption[] = this.formService.drivetrainOptions;
  steeringOptions: Suboption[] = this.formService.steeringOptions;
  seatOptions: Suboption[] = this.formService.seatOptions;
  pedalsOptions: Suboption[] = this.formService.pedalsOptions;
  accessoriesOptions: Suboption[] = this.formService.accessoriesOptions;

  form: FormGroup;
  @ViewChild(FormGroupDirective, {static: true}) FormGroupDirective:
    FormGroupDirective;

  constructor(private formService: FormService,
              private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this._initForm();
  }


  onClicked(value) {
    switch (value) {
      case 'Байк':
        this.suboptions = this.bikeOptions;
        break;
      case 'Рама':
        this.suboptions = this.frameOptions;
        break;
      case 'Подвеска':
        this.suboptions = this.suspensionOptions;
        break;
      case 'Тормоза':
        this.suboptions = this.brakesOptions;
        break;
      case 'Колеса и резина':
        this.suboptions = this.wheelsAndTyresOptions;
        break;
      case 'Привод':
        this.suboptions = this.drivetrainOptions;
        break;
      case 'Управление':
        this.suboptions = this.steeringOptions;
        break;
      case 'Сидение':
        this.suboptions = this.seatOptions;
        break;
      case 'Педали':
        this.suboptions = this.pedalsOptions;
        break;
      case 'Аксессуары':
        this.suboptions = this.accessoriesOptions;
        break;
    }
  }

  private _initForm() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      subcategory: new FormControl('', Validators.required),
      condition: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      trade: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      contacts: new FormControl('', Validators.required),
      text: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
      id: new FormControl(39, Validators.required),
    });
  }

  onSubmit() {
    this.productsService.sendProductToServer(this.form.value)
      .subscribe(() => {
        this.FormGroupDirective.resetForm({
          id: 40
        });
      });
  }

}
