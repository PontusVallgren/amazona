import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from '../models';
import * as fromApp from '../store/app.reducer';
import * as ProductActions from '../products/store/product.actions';
import * as ProductSelectors from '../products/store/product.selectors';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}
  products = this.store.select(ProductSelectors.selectFilteredProducts);
  categories = this.store.select(ProductSelectors.selectAllProductCategories);
  ratings: number[] = [1, 2, 3, 4, 5];
  categoriesDefaultValue: any = 'All';
  ratingDefaultValue: number | string = 'All';

  ngOnInit(): void {
    this.store.dispatch(ProductActions.fetchProducts());
    this.route.queryParamMap.subscribe((params) => {
      this.categoriesDefaultValue = params.get('category')
        ? params.get('category')
        : 'All';
      this.store.dispatch(
        ProductActions.filterProducts({
          filterBy: {
            category: this.categoriesDefaultValue,
            rating: this.ratingDefaultValue,
          },
        })
      );
    });

    console.log(this.products);
  }

  onChangeCategory(selected: string) {
    this.categoriesDefaultValue = selected;
    this.store.dispatch(
      ProductActions.filterProducts({
        filterBy: { category: selected, rating: this.ratingDefaultValue },
      })
    );
    this.router.navigate(['/search'], {
      queryParams: { category: selected },
      queryParamsHandling: 'merge',
    });
  }
  onChangeRating(selected: number | string) {
    this.ratingDefaultValue = selected;
    this.store.dispatch(
      ProductActions.filterProducts({
        filterBy: { category: this.categoriesDefaultValue, rating: selected },
      })
    );
    this.router.navigate(['/search'], {
      queryParams: { rating: selected },
      queryParamsHandling: 'merge',
    });
  }
}
