import {Injectable} from '@angular/core';
import {ProductsService} from '../../shared/services/products.service';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class PostPageResolver implements Resolve<number> {
  constructor(private productsService: ProductsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<number> {
    return this.productsService.getLastProductId();
  }
}
