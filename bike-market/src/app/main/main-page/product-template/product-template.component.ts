import {Component, OnInit, OnDestroy} from '@angular/core';
import {ProductsService} from '../../../shared/products.service';
import {Product} from '../../../shared/product.model';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.scss']
})
export class ProductTemplateComponent implements OnInit, OnDestroy {
  productsArr: Product[] = [];
  subscription: Subscription;

  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.subscription = this.productsService.getProductsFromServer()
      .subscribe((data) => {
        if (!(this.productsService.products.length)) {
          this.productsArr = data;
          this.productsService.products = data;
        }
      });

    this.activatedRoute.queryParamMap.subscribe((queryParamMap: ParamMap) => {
      const currentQuery = queryParamMap.get('category');
      if (currentQuery && currentQuery.length) {
        this.productsArr = currentQuery.split(',')
          .reduce((acc: Product[], filter: string): Product[] => {
            return [...acc, ...this.productsService.getProductByQuery(filter)];
          }, []);
      } else {
        this.productsArr = this.productsService.products;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
