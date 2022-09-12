import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand">{{ pageTitle }}</a>
      <ul class="navbar-nav">
        <a
          class="nav-link"
          routerLink="/welcome"
          [ngClass]="{ active: isValue === 1 }"
          (click)="toggle(1)"
          )
          >Home</a
        >
        <a
          class="nav-link"
          routerLink="/products"
          [ngClass]="{ active: isValue === 2 }"
          (click)="toggle(2)"
          )
          >Product list</a
        >
        <!-- <a class="nav-link" routerLink="/products">Product list</a> -->
      </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  pageTitle: string = 'Helmi Product Management';
  isValue: number = 0;

  toggle(num: number): void {
    this.isValue = num;
  }
}
