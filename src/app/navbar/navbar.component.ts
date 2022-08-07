import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isOpen: boolean = false;
  categorys: string[] = ['Shirts', 'Shorts', 'Pants'];
  sub!: Subscription;
  cartItems!: Number;

  ngOnInit(): void {
    this.sub = this.store.select('cart').subscribe((cartState) => {
      this.cartItems = cartState.cart.length;
    });
  }

  toggleSideNav() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  constructor(private store: Store<fromApp.AppState>) {}
}
