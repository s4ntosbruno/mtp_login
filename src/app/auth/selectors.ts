import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');
export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state) => state.isAuthenticated
);
