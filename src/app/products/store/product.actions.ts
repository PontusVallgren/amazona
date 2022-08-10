import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models';

export const SET_PRODUCTS = '[Products] Set Products';
export const FETCH_PRODUCTS = '[Products] Fetch Products';
export const ADD_TO_CART = '[Shopping Cart] Add to cart';
export const DELETE_CART_ITEM = '[Shopping Cart] Delete cart item';
export const UPDATE_CART_ITEM_QUANTITY =
  '[Shopping Cart] Update cart item quantity';

export const setProducts = createAction(
  SET_PRODUCTS,
  props<{ products: Product[] }>()
);
export const fetchProducts = createAction(FETCH_PRODUCTS);

export const addToCart = createAction(
  ADD_TO_CART,
  props<{ product: Product; quantity: number }>()
);

export const deleteCartItem = createAction(
  DELETE_CART_ITEM,
  props<{ id: number }>()
);

export const updateCartItemQuantity = createAction(
  UPDATE_CART_ITEM_QUANTITY,
  props<{ quantity: number; id: number }>()
);
