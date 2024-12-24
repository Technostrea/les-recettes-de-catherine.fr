import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "@app/core/services/auth/auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const data = localStorage.getItem('pocketbase_auth');

  // if (data == null || authService.user() == undefined || !authService.user()!.isValid) {
  //   return router.parseUrl("/auth")
  // }

  if (data == null ) {
    return router.parseUrl("/auth")
  }

  const {token} = JSON.parse(data!);
  if (token) {
    authService.setToken(token);
    if (!authService.isAuthenticated()) {
      console.log('Token is invalid or expired');
      return router.parseUrl("/auth")
    }
  } else {
    console.log('No token found');
    return router.parseUrl("/auth")
  }

  return true;
};
