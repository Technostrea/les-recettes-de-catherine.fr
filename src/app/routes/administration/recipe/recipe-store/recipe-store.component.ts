import {Component, inject} from '@angular/core';
import {CreateUpdateRecipeComponent} from "@app/shared/features/create-update-recipe/create-update-recipe.component";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {Recipe} from "@app/shared/models/recipe";

@Component({
  selector: 'app-recipe-store',
  standalone: true,
  imports: [
    CreateUpdateRecipeComponent
  ],
  templateUrl: './recipe-store.component.html',
  styleUrl: './recipe-store.component.scss'
})
export class RecipeStoreComponent {
  protected location = inject(Location);
  private readonly router = inject(Router);
  protected extraData = this.router.getCurrentNavigation()?.extras.state?.['recipe'] as Recipe;

}
