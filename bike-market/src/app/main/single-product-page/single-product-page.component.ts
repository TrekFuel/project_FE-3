import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductsService} from '../../shared/products.service';
import {Product} from '../../shared/product.model';
import {exhaustMap, map, take} from 'rxjs/operators';

@Component({
  selector: 'app-single-product-page',
  templateUrl: './single-product-page.component.html',
  styleUrls: ['./single-product-page.component.scss']
})
export class SingleProductPageComponent implements OnInit {
  currentProduct: Product;
  isProduct = false;

  constructor(private activatedRoute: ActivatedRoute,
              private productsService: ProductsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      take(1),
      map((paramMap: ParamMap) => +paramMap.get('id')),
      exhaustMap(routId => this.productsService.getProductFromServer(routId)),
    )
      .subscribe((singleProduct) => {
        if (singleProduct) {
          this.currentProduct = singleProduct;
          this.isProduct = true;
        } else {
          this.router.navigate(['**']);
        }
      });
  }
}
