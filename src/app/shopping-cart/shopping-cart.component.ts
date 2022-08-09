import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cartItem } from '../products/store/product.reducer';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  cartItems: cartItem[] = [];
  price = 0;
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.store.select('cart').subscribe((cartState) => {
      this.cartItems = cartState.cart;
    });

    this.cartItems.forEach((item) => {
      if (item.quantity > 1) {
        this.price += item.product.price * +item.quantity;
      } else {
        this.price += item.product.price;
      }
    });

    console.log(this.cartItems);
  }
}
