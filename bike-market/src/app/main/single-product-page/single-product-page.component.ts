import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductsService} from '../../shared/products.service';
import {Product} from '../../shared/product.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-single-product-page',
  templateUrl: './single-product-page.component.html',
  styleUrls: ['./single-product-page.component.scss']
})
export class SingleProductPageComponent implements OnInit, OnDestroy {
  currentProduct: Product;
  isProduct = false;
  paramSubscription: Subscription;
  observableSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private productsService: ProductsService, private router: Router) {
  }

  ngOnInit(): void {
    this.paramSubscription = this.activatedRoute.paramMap
      .subscribe((paramMap: ParamMap) => {
        const routId = +paramMap.get('id');
        let filteredProduct = null;
        this.observableSubscription = this.productsService.getProductFromServer(routId)
          .subscribe((data) => {
            filteredProduct = data;
            if (filteredProduct) {
              this.currentProduct = filteredProduct;
              this.isProduct = true;
            } else {
              this.router.navigate(['**']);
            }
          });
      });
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
    this.observableSubscription.unsubscribe();
  }
}
