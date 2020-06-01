import {Injectable} from '@angular/core';
import {Product} from '../models/product.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _productsArr: Product[];
  private _products: Product[] = [];
  private _endAt: number;
  private _limit = 9;

  constructor(private http: HttpClient) {
  }

  set products(products: Product[]) {
    this._products = products;
  }

  get products(): Product[] {
    return [...this._products];
  }

  set limit(limit) {
    this._limit = limit;
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

  getProductsPartFromServer(endAt: number): Observable<Product[]> {
    return this.http.get(`${environment.api}/products.json?orderBy="id"&startAt=1&endAt=${endAt}`)
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

  sendProductToServer(product: Product): Observable<object> {
    return this.http.post(`${environment.api}/products.json`, product);
  }

  getLastProductIdFromServer(): Observable<number> {
    return this.http.get(`${environment.api}/products.json?orderBy="id"&limitToLast=1`)
      .pipe(
        map((data: Product) => {
          const singleProduct = [];
          for (const item in data) {
            if (data.hasOwnProperty(item)) {
              singleProduct.push({...data[item]});
            }
          }
          return singleProduct[0].id;
        })
      );
  }

  loadMore() {
    this._endAt = this.products.length;
    return this.getProductsPartFromServer(this._endAt + this._limit);
  }
}
