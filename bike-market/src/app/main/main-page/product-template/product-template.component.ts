import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.scss']
})
export class ProductTemplateComponent implements OnInit {

  productsArr: object[] = [
    {
      img: '../../assets/product-images/IMG_6346.JPG',
      title: 'Двухподвес Mondraker Dune R 2018 27.5 170/160', category: 'bike',
      subcategory: 'full-suspension', condition: 'used', price: '3000$',
      city: 'Moscow'
    },
    {
      img: '../../assets/product-images/IMG_6346.JPG',
      title: 'Двухподвес Mondraker Dune R 2018 27.5 170/160', category: 'bike',
      subcategory: 'full-suspension', condition: 'used', price: '3000$',
      city: 'Kiev'
    },
    {
      img: '../../assets/product-images/IMG_6346.JPG',
      title: 'Двухподвес Mondraker Dune R 2018 27.5 170/160', category: 'bike',
      subcategory: 'full-suspension', condition: 'used', price: '3000$',
      city: 'New York'
    },
    {
      img: '../../assets/product-images/IMG_6346.JPG',
      title: 'Двухподвес Mondraker Dune R 2018 27.5 170/160', category: 'bike',
      subcategory: 'full-suspension', condition: 'used', price: '3000$',
      city: 'Minsk'
    },
  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onProductClick() {
    this.router.navigate(['/product/:id']);
  }

}
