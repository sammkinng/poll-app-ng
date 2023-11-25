import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const addInfoGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  if (router.url.includes('/auth/register') || localStorage.getItem('addUid')) {
    return true; // Allow access to '/auth/add-info'
  } else {
    // Redirect the user to '/auth/register' if they are not coming from there
    return router.createUrlTree(['/auth/register']);
  }
};

export const uidGuard: CanActivateFn = (r, s) => {
  const router = inject(Router)
  if (localStorage.getItem('addUid')) {
    return router.createUrlTree(['/auth/add-info'])
  }
  return true
}
