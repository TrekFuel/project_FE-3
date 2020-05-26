import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators
} from '@angular/forms';
import {Suboption} from '../../shared/suboption.model';
import {FormService} from '../../shared/form.service';
import {ProductsService} from '../../shared/products.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit, OnDestroy {

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
  @ViewChild(FormGroupDirective, {static: true}) formGroupDirective:
    FormGroupDirective;

  lastProductId: number;
  getIdSubscription: Subscription;

  constructor(private formService: FormService,
              private productsService: ProductsService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getIdSubscription = this.activatedRoute.data
      .subscribe((data) => {
        this.lastProductId = data.postId;
      });
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
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(50)
      ]),
      category: new FormControl('', Validators.required),
      subcategory: new FormControl('', Validators.required),
      condition: new FormControl('', Validators.required),
      price: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(100000)
      ]),
      trade: new FormControl('', Validators.required),
      city: new FormControl('', [
        Validators.required,
        Validators.pattern('^[а-яА-ЯёЁ\-]{2,25}$'),
      ]),
      contacts: new FormControl('', [
        Validators.required,
        Validators
          .pattern('^(\\+375)\\s\\((29|25|44|33)\\)\\s(\\d{3})\\-(\\d{2})\\-(\\d{2})$')
      ]),
      text: new FormControl('', [
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(1000)
      ]),
      img: new FormControl('', Validators.required),
      id: new FormControl(this.lastProductId + 1, Validators.required),
    });
  }

  get title() {
    return this.form.get('title');
  }

  get category() {
    return this.form.get('category');
  }

  get subcategory() {
    return this.form.get('subcategory');
  }

  get condition() {
    return this.form.get('condition');
  }

  get price() {
    return this.form.get('price');
  }

  get trade() {
    return this.form.get('trade');
  }

  get city() {
    return this.form.get('city');
  }

  get contacts() {
    return this.form.get('contacts');
  }

  get text() {
    return this.form.get('text');
  }

  onSubmit() {
    this.productsService.sendProductToServer(this.form.value)
      .subscribe(() => {
        this.lastProductId = this.lastProductId + 1;
        this.formGroupDirective.resetForm({
          id: this.lastProductId + 1,
        });
      });
  }

  ngOnDestroy() {
    this.getIdSubscription.unsubscribe();
  }

}
