import { Routes } from '@angular/router';
import { LoginComponent } from './components/login.component';
import { HomeComponent } from './components/home.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
];
