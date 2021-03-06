import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from '../../shared/services/products.service';
import {Product} from '../../shared/models/product.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  isPart = true;
  products: Product[];
  limit = 9;
  previousQueryLength = this.limit;
  radios = [3, 6, 9, 12];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private productsService: ProductsService) {
  }

  ngOnInit(): void {
    if (this.router.url.split('?')[0] === '/filters') {
      this.isPart = false;
    } else {
      this.activatedRoute.data
        .subscribe((data) => {
          this.productsService.products = data.productsPart;
        });
    }
  }

  showMore() {
    this.productsService.loadMore()
      .subscribe((data: Product[]) => {
        this.products = data;
        this.productsService.products = data;
        if (data.length === this.previousQueryLength) {
          this.isPart = false;
        }
        this.previousQueryLength = data.length;
      });
  }

  selectPaginationLimit(limit) {
    this.limit = limit;
    this.productsService.limit = limit;
  }
}
