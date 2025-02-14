import {Component, inject} from '@angular/core';
import {
  CreateUpdateRecipeIngredientComponent
} from "@app/shared/features/create-update-recipe-ingredient/create-update-recipe-ingredient.component";
import {Location, UpperCasePipe} from "@angular/common";
import {Router} from "@angular/router";
import {Recipe} from "@app/shared/models/recipe";

@Component({
  selector: 'app-ingredient-recipe-store',
  standalone: true,
  imports: [
    CreateUpdateRecipeIngredientComponent,
    UpperCasePipe
  ],
  templateUrl: './ingredient-recipe-store.component.html',
  styleUrl: './ingredient-recipe-store.component.scss'
})
export class IngredientRecipeStoreComponent {
  protected location = inject(Location);
  private readonly router = inject(Router);
  protected extraData = this.router.getCurrentNavigation()?.extras.state?.['recipe'] as Recipe;
}
