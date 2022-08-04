import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isOpen: boolean = false;
  categorys: string[] = ['Shirts', 'Shorts', 'Pants'];

  toggleSideNav() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }

  constructor() {}
}
