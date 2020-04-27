import {Injectable} from '@angular/core';
import {Product} from './product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsArr: Product[] = [
    {
      id: 1,
      img: '../../assets/product-images/IMG_6346.JPG',
      title: 'Двухподвес Mondraker Dune R 2018 27.5 170/160',
      category: 'bike',
      subcategory: 'full-suspension',
      condition: 'used',
      price: '3000$',
      city: 'Moscow'
    },
    {
      id: 2,
      img: '../../assets/product-images/IMG_6346.JPG',
      title: 'Вилка Fox 36 Perfomance FIT4 170',
      category: 'suspension',
      subcategory: 'fork',
      condition: 'used',
      price: '600$',
      city: 'Kiev'
    },
    {
      id: 3,
      img: '../../assets/product-images/IMG_6346.JPG',
      title: 'Амортизатор Fox DPX2',
      category: 'suspension',
      subcategory: 'shock',
      condition: 'used',
      price: '250$',
      city: 'New York'
    },
    {
      id: 4,
      img: '../../assets/product-images/IMG_6346.JPG',
      title: 'Покрышки Maxxis High Roller EXO',
      category: 'wheelsAndTyres',
      subcategory: 'tyres',
      condition: 'new',
      price: '50$',
      city: 'Minsk'
    },
  ];

  constructor() {
  }

  get products() {
    return [...this.productsArr];
  }

  getProductById(productId: number): Product {
    return this.productsArr.filter((product) => product.id === productId)[0];
  }
}
