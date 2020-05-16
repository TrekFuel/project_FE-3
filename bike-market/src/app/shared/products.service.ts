import {Injectable} from '@angular/core';
import {Product} from './product.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // tslint:disable-next-line:variable-name
  private _productsArr: Product[];
  // tslint:disable-next-line:variable-name
  private _products: Product[] = [];

  constructor(private http: HttpClient) {
  }

  getProductsFromServer(): Observable<Product[]> {
    return this.http.get(`${environment.api}/products.json`)
      .pipe(
        map((data) => {
          const productsArr: Product[] = [];
          for (const item in data) {
            if (data.hasOwnProperty(item)) {
              productsArr.push({...data[item]});
            }
          }
          this._productsArr = productsArr;
          return [...this._productsArr];
        })
      );
  }

  getProductFromServer(id: number): Observable<Product> {
    return this.http.get(`${environment.api}/products.json?orderBy="id"&equalTo=${id}`)
      .pipe(
        map((data) => {
          const product = [];
          for (const item in data) {
            if (data.hasOwnProperty(item)) {
              product.push({...data[item]});
            }
          }
          return product[0];
        })
      );
  }

  getProductByQuery(productQuery: string): Product[] {
    return [...this._productsArr].filter((product: Product) =>
      product.subcategory === productQuery);
  }

  set products(products: Product[]) {
    this._products = products;
  }

  get products(): Product[] {
    return [...this._products];
  }
}
