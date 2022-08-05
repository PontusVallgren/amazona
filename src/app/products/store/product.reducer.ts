import { createReducer, on, props } from '@ngrx/store';
import { Product } from 'src/app/models';

import * as ProductActions from './product.acions';

export interface State {
  products: Product[];
}

const initialState: State = {
  products: [],
};

export const productReducer = createReducer(
  initialState,
  on(ProductActions.setProducts, (state, { products }) => ({
    ...state,
    products: [...products],
  }))
);
