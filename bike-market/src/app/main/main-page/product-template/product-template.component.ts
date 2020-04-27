import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../../shared/products.service';
import {Product} from '../../../shared/product-model';

@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.scss']
})
export class ProductTemplateComponent implements OnInit {
  productsArr: Product[] = this.productsService.products;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {

  }

}
