import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';

export const addInfoGuard: CanActivateFn = (route, state) => {
  const router=inject(Router)
  if (router.url.includes('/register') || localStorage.getItem('addUid')) {
    return true; // Allow access to '/add-info'
  } else {
    // Redirect the user to '/register' if they are not coming from there
    return router.createUrlTree(['/register']);
  }
};

export const uidGuard:CanActivateFn=(r,s)=>{
  const router=inject(Router)
  if(localStorage.getItem('addUid')){
    return router.createUrlTree(['/add-info'])
  }
  return true
}
