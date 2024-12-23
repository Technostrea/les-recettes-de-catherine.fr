import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "@app/core/services/auth/auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // if (authService.user() == undefined || !authService.user()!.isValid) {
  //   return router.parseUrl("/auth")
  // }
  return true;
};
