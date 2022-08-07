import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs';
import { Product } from 'src/app/models';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params) => {
          return +params['id'];
        }),
        switchMap((id: number) => {
          this.id = id;
          return this.store.select('products');
        }),
        map((productState) => {
          return productState.products.find((r, index) => {
            return index + 1 === this.id;
          });
        })
      )
      .subscribe((product) => {
        if (product) {
          this.product = product;
        } else {
          this.router.navigate(['/']);
        }
      });
  }
}
