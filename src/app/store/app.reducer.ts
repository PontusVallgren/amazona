import { ActionReducerMap } from '@ngrx/store';
import * as fromProducts from '../products/store/product.reducer';

export interface AppState {
  products: fromProducts.State;
  cart: fromProducts.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  products: fromProducts.productReducer,
  cart: fromProducts.productReducer,
};
