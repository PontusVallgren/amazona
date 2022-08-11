import { createSelector } from '@ngrx/store';
import { Product } from 'src/app/models';
import * as fromApp from '../../store/app.reducer';
import { State } from './product.reducer';

export const selectProducts = (state: fromApp.AppState) => state.products;
export const selectFilter = (state: fromApp.AppState) => state.filterBy;

export const selectAllProducts = createSelector(
  selectProducts,
  (state: State) => state.products
);

export const selectFilteredProducts = createSelector(
  selectProducts,
  selectFilter,
  (state: State) => {
    console.log(state.filterBy);
    let filteredProducts =
      state.filterBy.category !== 'All'
        ? state.products.filter(
            (product: Product) => product.category === state.filterBy.category
          )
        : state.products;
    filteredProducts =
      state.filterBy.rating !== 'All'
        ? filteredProducts.filter(
            (product: Product) =>
              Math.ceil(product.rating.rate) === state.filterBy.rating
          )
        : filteredProducts;

    return filteredProducts;
  }
);

export const selectAllProductCategories = createSelector(
  selectProducts,
  (state: State) => {
    return [...new Set(state.products.map((product) => product.category))];
  }
);
