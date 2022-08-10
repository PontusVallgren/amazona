import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { cartItem } from '../products/store/product.reducer';
import * as fromApp from '../store/app.reducer';
import * as ProductActions from '../products/store/product.actions';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  cartItems: cartItem[] = [];
  price: number = 0;
  options: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.store.select('cart').subscribe((cartState) => {
      this.cartItems = cartState.cart;

      this.price = 0;
      cartState.cart.forEach((item) => {
        if (item.quantity > 1) {
          this.price += item.product.price * +item.quantity;
        } else {
          this.price += item.product.price;
        }
      });
    });

    console.log(this.cartItems);
  }

  onQuantityChange(quantity: number, id: number) {
    this.store.dispatch(
      ProductActions.updateCartItemQuantity({ quantity, id })
    );
  }

  onDeleteItem(id: number) {
    this.store.dispatch(ProductActions.deleteCartItem({ id }));
  }
}
