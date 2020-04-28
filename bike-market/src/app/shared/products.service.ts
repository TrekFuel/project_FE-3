import {Injectable} from '@angular/core';
import {Product} from './product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsArr: Product[] = [
    {
      id: 1,
      title: 'Двухподвес mondraker dune r 2018 27.5 170/160',
      category: 'bike',
      subcategory: 'full-suspension',
      condition: 'used',
      price: 3000,
      trade: 'да',
      city: 'Moscow',
      contacts: '+37529-132-86-33',
      text: 'Рама - Mondraker summum pro team 2011; Амортизатор- Fox rc 4' +
        ' (пружина 450, но может быть и 400); Вилка - Fox 40 rc2 Kashima' +
        ' (26") 2013; Тормоза- Shimano saint m82; Система - Shimano saint' +
        ' m820 (36 зубов) (ширина 73 мм); Колеса: втулки - DT Swiss fr' +
        ' 2350, обода - Mavic 729, спицы - DT swiss; Манетка - Shimano saint' +
        ' m820 (10 скоростей); Перекидка- Shimano saint m820 (10 скоростей,' +
        ' короткая лапка); Руль - Easton havoc carbon 35 mm, 800 mm; Вынос-' +
        ' Easton havoc 35 mm; Подсидельник - Easton havoc',
      img: '../../assets/product-images/IMG_6346.JPG',
    },
    {
      id: 2,
      title: 'Двухподвес mondraker summum pro team 2011',
      category: 'bike',
      subcategory: 'full-suspension',
      condition: 'used',
      price: 2000,
      trade: 'да',
      city: 'Kiev',
      contacts: '+37529-123-56-91',
      text: 'Рама - Mondraker summum pro team 2011; Амортизатор- Fox rc 4' +
        ' (пружина 450, но может быть и 400); Вилка - Fox 40 rc2 Kashima' +
        ' (26") 2013; Тормоза- Shimano saint m82; Система - Shimano saint' +
        ' m820 (36 зубов) (ширина 73 мм); Колеса: втулки - DT Swiss fr' +
        ' 2350, обода - Mavic 729, спицы - DT swiss; Манетка - Shimano saint' +
        ' m820 (10 скоростей); Перекидка- Shimano saint m820 (10 скоростей,' +
        ' короткая лапка); Руль - Easton havoc carbon 35 mm, 800 mm; Вынос-' +
        ' Easton havoc 35 mm; Подсидельник - Easton havoc',
      img: '../../assets/product-images/IMG_6346.JPG',
    },
    {
      id: 3,
      title: 'Вилка fox 36 perfomance FIT4',
      category: 'suspension',
      subcategory: 'fork',
      condition: 'used',
      price: 500,
      trade: 'да',
      city: 'Minsk',
      contacts: '+37529-546-12-34',
      text: 'Рама - Mondraker summum pro team 2011; Амортизатор- Fox rc 4' +
        ' (пружина 450, но может быть и 400); Вилка - Fox 40 rc2 Kashima' +
        ' (26") 2013; Тормоза- Shimano saint m82; Система - Shimano saint' +
        ' m820 (36 зубов) (ширина 73 мм); Колеса: втулки - DT Swiss fr' +
        ' 2350, обода - Mavic 729, спицы - DT swiss; Манетка - Shimano saint' +
        ' m820 (10 скоростей); Перекидка- Shimano saint m820 (10 скоростей,' +
        ' короткая лапка); Руль - Easton havoc carbon 35 mm, 800 mm; Вынос-' +
        ' Easton havoc 35 mm; Подсидельник - Easton havoc',
      img: '../../assets/product-images/IMG_6346.JPG',
    },
    {
      id: 4,
      title: 'Амортизатор fox float DPX2',
      category: 'suspension',
      subcategory: 'shock',
      condition: 'used',
      price: 250,
      trade: 'да',
      city: 'Grodno',
      contacts: '+37529-232-12-23',
      text: 'Рама - Mondraker summum pro team 2011; Амортизатор- Fox rc 4' +
        ' (пружина 450, но может быть и 400); Вилка - Fox 40 rc2 Kashima' +
        ' (26") 2013; Тормоза- Shimano saint m82; Система - Shimano saint' +
        ' m820 (36 зубов) (ширина 73 мм); Колеса: втулки - DT Swiss fr' +
        ' 2350, обода - Mavic 729, спицы - DT swiss; Манетка - Shimano saint' +
        ' m820 (10 скоростей); Перекидка- Shimano saint m820 (10 скоростей,' +
        ' короткая лапка); Руль - Easton havoc carbon 35 mm, 800 mm; Вынос-' +
        ' Easton havoc 35 mm; Подсидельник - Easton havoc',
      img: '../../assets/product-images/IMG_6346.JPG',
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
