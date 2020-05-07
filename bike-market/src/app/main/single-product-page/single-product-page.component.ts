import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductsService} from '../../shared/products.service';
import {Product} from '../../shared/product.model';

@Component({
  selector: 'app-single-product-page',
  templateUrl: './single-product-page.component.html',
  styleUrls: ['./single-product-page.component.scss']
})
export class SingleProductPageComponent implements OnInit {
  currentProduct: Product;
  isProduct = false;

  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const routId = +paramMap.get('id');
      const filteredArray = this.productsService.getProductById(routId);
      if (filteredArray) {
        this.currentProduct = filteredArray;
        this.isProduct = true;
      } else {
        this.router.navigate(['**']);
      }
    });
  }
}
