import { createReducer, on } from '@ngrx/store';
import { catchError } from 'rxjs';
import { Product } from 'src/app/models';

import * as ProductActions from './product.actions';

export interface cartItem {
  product: Product;
  quantity: Number;
}

export interface State {
  products: Product[];
  cart: cartItem[];
}

const initialState: State = {
  products: [],
  cart: [],
};

export const productReducer = createReducer(
  initialState,
  on(ProductActions.setProducts, (state, { products }) => {
    return {
      ...state,
      products: [...products],
    };
  }),
  on(ProductActions.addToCart, (state, { product, quantity }) => {
    const productInCart = state.cart.find((p) => {
      return p.product.title === product.title;
    });
    if (!productInCart) {
      return {
        ...state,
        cart: [...state.cart, { product, quantity }],
      };
    } else {
      return {
        ...state,
      };
    }
  })
);
