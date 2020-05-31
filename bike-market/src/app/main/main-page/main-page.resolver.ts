import {Injectable} from '@angular/core';
import {ProductsService} from '../../shared/services/products.service';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import {Product} from '../../shared/models/product.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MainPageResolver implements Resolve<Product[]> {
  constructor(private productsService: ProductsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
    return this.productsService.getProductsPartFromServer(9);
  }
}
