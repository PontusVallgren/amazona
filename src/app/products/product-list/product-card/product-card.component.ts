import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models';
import * as fromApp from '../../../store/app.reducer';
import * as ProductActions from '../../store/product.actions';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  constructor(private store: Store<fromApp.AppState>) {}

  addToCart() {
    this.store.dispatch(
      ProductActions.addToCart({ product: this.product, quantity: 1 })
    );
  }

  ngOnInit(): void {}
}
