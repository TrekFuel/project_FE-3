import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ProductsService} from '../../shared/products.service';
import {Product} from '../../shared/product-model';

@Component({
  selector: 'app-single-product-page',
  templateUrl: './single-product-page.component.html',
  styleUrls: ['./single-product-page.component.scss']
})
export class SingleProductPageComponent implements OnInit {
  currentProduct: Product;

  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const routId = +paramMap.get('id');
      this.currentProduct = this.productsService.getProductById(routId);
    });

  }
}
