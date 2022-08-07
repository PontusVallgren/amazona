import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models';

export const SET_PRODUCTS = '[Products] Set Products';
export const FETCH_PRODUCTS = '[Products] Fetch Products';

export const setProducts = createAction(
  SET_PRODUCTS,
  props<{ products: Product[] }>()
);
export const fetchProducts = createAction(FETCH_PRODUCTS);
