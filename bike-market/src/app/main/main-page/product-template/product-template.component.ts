import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from '../../../shared/services/products.service';
import {Product} from '../../../shared/models/product.model';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {take, map, exhaustMap} from 'rxjs/operators';

@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.scss']
})
export class ProductTemplateComponent implements OnInit {
  @Input() productsArr: Product[];

  constructor(private router: Router,
              private productsService: ProductsService,
              private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    if (this.router.url.split('?')[0] !== '/filters') {
      this.productsArr = this.productsService.products;
    } else {
      this.productsService.getProductsFromServer().pipe(
        take(1),
        map((data: Product[]) => {
          this.productsArr = data;
          this.productsService.products = data;
        }),
        exhaustMap(() => this.activatedRoute.queryParamMap)
      )
        .subscribe((queryParamMap: ParamMap) => {
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
  }
}
