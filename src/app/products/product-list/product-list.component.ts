import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models';
import * as fromApp from '../../store/app.reducer';
import * as ProductActions from '../store/product.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  subscription!: Subscription;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.subscription = this.store.select('products').subscribe((state) => {
      this.products = state.products;
      console.log(this.products);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
