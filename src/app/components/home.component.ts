import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { logout } from '../auth/actions';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section>
      <h2>Welcome to Home</h2>
      <button (click)="onLogout()">Logout</button>
    </section>
  `,
})
export class HomeComponent {
  constructor(private store: Store, private router: Router) {}

  onLogout() {
    this.store.dispatch(logout());
    this.router.navigate(['/']);
  }
}
