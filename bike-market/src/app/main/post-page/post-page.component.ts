import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators
} from '@angular/forms';
import {Suboption} from './suboption.model';
import {FormService} from './form.service';
import {ProductsService} from '../../shared/services/products.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {
  AngularFireStorage,
  AngularFireStorageReference
} from '@angular/fire/storage';

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
  path: string;
  imgUrl: AngularFireStorageReference;
  countryCode = '+375';
  isSent = false;

  constructor(private formService: FormService,
              private productsService: ProductsService,
              private activatedRoute: ActivatedRoute,
              private angularFireStorage: AngularFireStorage) {
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

  get imgInp() {
    return this.form.get('imgInp');
  }

  get img() {
    return this.form.get('img');
  }

  get text() {
    return this.form.get('text');
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
          .pattern(/((\(25\))|(\(29\))|(\(33\))|(\(44\)))\s(\d{3})-(\d{2})-(\d{2})$/)
      ]),
      id: new FormControl(this.lastProductId + 1, Validators.required),
      imgInp: new FormControl('', Validators.required),
      img: new FormControl(''),
      text: new FormControl('', [
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(1000)
      ]),
    });
  }

  onFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      const filePath = `/products-images/${file.name}`;
      const ref = this.angularFireStorage.ref(filePath);
      this.path = filePath;
      const task = ref.put(file);
      task.then(() => {
        this.angularFireStorage.ref(this.path)
          .getDownloadURL()
          .subscribe((data) => {
            this.imgUrl = data;
          });
      });
    }
  }

  onSubmit() {
    this.contacts.setValue(`${this.countryCode} ${this.contacts.value}`);
    this.imgInp.setValue(null);
    this.img.setValue(this.imgUrl);
    this.productsService.sendProductToServer(this.form.value)
      .subscribe(() => {
        this.lastProductId = this.lastProductId + 1;
        this.formGroupDirective.resetForm({
          id: this.lastProductId + 1,
        });
        this.showSuccessMessage();
      });
  }

  showSuccessMessage() {
    this.isSent = true;
    setTimeout(() => this.isSent = false, 15000);
  }

  ngOnDestroy() {
    this.getIdSubscription.unsubscribe();
  }

}
