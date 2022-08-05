import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, Observable } from 'rxjs';
import * as ProductActions from './product.acions';
import { Product } from 'src/app/models';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.fetchProducts),
      mergeMap(() => {
        return this.http
          .get<Product[]>('https://fakestoreapi.com/products')
          .pipe(
            map((products: Product[]) => {
              return {
                type: ProductActions.setProducts.type,
                products,
              };
            }),
            catchError(() => EMPTY)
          );
      })
    );
  });

  constructor(private actions$: Actions, private http: HttpClient) {}
}
