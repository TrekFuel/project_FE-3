import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../../shared/products.service';
import {Product} from '../../../shared/product.model';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.scss']
})
export class ProductTemplateComponent implements OnInit {
  productsArr: Product[];

  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.productsArr = this.productsService.products;

    this.activatedRoute.queryParamMap.subscribe((queryParamMap: ParamMap) => {
      const currentQuery = queryParamMap.get('category');
      if (currentQuery) {
        this.productsArr = this.productsService.getProductByQuery(currentQuery);
      } else {
        this.productsArr = this.productsService.products;
      }
    });
  }

}
