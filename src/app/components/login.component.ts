import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from '../auth/actions';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section>
      <input
        type="text"
        name="username"
        placeholder="username"
        [(ngModel)]="username"
        type="text"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        [(ngModel)]="password"
      />
      <button (click)="login()">Login</button>
    </section>
  `,
})
export class LoginComponent {
  constructor(private store: Store, private router: Router) {}
  username = '';
  password = '';

  login() {
    if (this.username === 'pwc' && this.password === 'pwc') {
      this.store.dispatch(
        login({ username: this.username, password: this.password })
      );
      this.router.navigate(['/home']);
    }
  }
}
