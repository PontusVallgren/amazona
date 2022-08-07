import { createReducer, on } from '@ngrx/store';
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
    //Check if product in cart == true
    const productInCart = state.cart.find((p) => {
      return p.product.title === product.title;
    });

    if (!productInCart) {
      return {
        ...state,
        cart: [...state.cart, { product, quantity }],
      };
    } else {
      //Update product quantity by 1
      const updateQuantity = {
        product: productInCart.product,
        quantity: +productInCart.quantity + 1,
      };
      //Find index of updated product in cart
      const findIndex = state.cart.findIndex(
        (obj) => obj.product.id == productInCart.product.id
      );
      //Copy cart and replace with updated product
      let updateCart = [...state.cart];
      updateCart[findIndex] = updateQuantity;

      return {
        ...state,
        cart: updateCart,
      };
    }
  })
);
