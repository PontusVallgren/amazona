import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models';
import * as fromApp from '../../store/app.reducer';
import * as ProductActions from '../../products/store/product.acions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.store.dispatch({ type: ProductActions.fetchProducts.type });
    this.store.select('products').subscribe((state) => {
      this.products = state.products;
      console.log(this.products);
    });
  }
}
