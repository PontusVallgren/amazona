import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models';
import * as fromApp from '../../store/app.reducer';
import * as ProductActions from '../store/product.actions';
import { Subscription } from 'rxjs';
import * as ProductsSelectors from '../store/product.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  products = this.store.select(ProductsSelectors.selectAllProducts);
  // subscription!: Subscription;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    console.log(this.products);
    // this.subscription = this.store.select('products').subscribe((state) => {
    //   this.products = state.products;
    // });
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
