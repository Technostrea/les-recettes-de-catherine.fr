import {Component, inject} from '@angular/core';
import {CreateUpdateRecipeComponent} from "@app/shared/features/create-update-recipe/create-update-recipe.component";
import {CreateStepComponent} from "@app/shared/features/create-step/create-step.component";
import {Location} from "@angular/common";
import {
  CreateUpdateRecipeIngredientComponent
} from "@app/shared/features/create-update-recipe-ingredient/create-update-recipe-ingredient.component";

@Component({
  selector: 'app-recipe-store',
  standalone: true,
  imports: [
    CreateUpdateRecipeComponent,
    CreateStepComponent,
    CreateUpdateRecipeIngredientComponent
  ],
  templateUrl: './recipe-store.component.html',
  styleUrl: './recipe-store.component.scss'
})
export class RecipeStoreComponent {
  protected location = inject(Location);
}
