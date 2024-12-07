import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = () => {
  const authService = inject(loginGuard); // Inject the AuthService
  const router = inject(Router); // Inject the Router

  if (authService.isAuthenticated()) {
    return true; // Allow access
  } else {
    // Redirect to login page if not authenticated
    return router.createUrlTree(['/log']);
  }
};
