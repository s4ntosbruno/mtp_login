import { createReducer, on } from '@ngrx/store';
import { login, logout } from './actions';

export interface AuthState {
  isAuthenticated: boolean;
}

export const initialState: AuthState = { isAuthenticated: false };

export const authReducer = createReducer(
  initialState,
  on(login, (state, { username, password }) => ({
    isAuthenticated: username === 'pwc' && password === 'pwc',
  })),
  on(logout, () => initialState)
);
