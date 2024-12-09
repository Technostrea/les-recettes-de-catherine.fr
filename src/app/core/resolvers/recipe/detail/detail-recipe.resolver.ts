import {ResolveFn, Router} from '@angular/router';
import {Recipe} from "@app/shared/models/recipe";
import {inject} from "@angular/core";

export const detailRecipeResolver: ResolveFn<{ recipe: Recipe }> = (route, state) => {
  const router = inject(Router);
  return router.getCurrentNavigation()?.extras.state as { recipe: Recipe }
};
