import {Component, inject, signal} from '@angular/core';
import {RecipeService} from "@app/core/services/recipe/recipe.service";
import {AsyncPipe, JsonPipe, NgClass} from "@angular/common";
import {RecipeDto} from "@app/shared/models/dto/recipe-dto";
import {Category} from "@app/shared/models/category";
import {RouterLink} from "@angular/router";
import {Recipe} from "@app/shared/models/recipe";
import {RootResponse} from "@app/shared/models/root-response";
import {UntilDestroy} from "@ngneat/until-destroy";

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    RouterLink,
    NgClass
  ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
@UntilDestroy()
export class RecipeListComponent {
  protected recipeService = inject(RecipeService);
  protected recipes = signal<RootResponse<Recipe>>({} as RootResponse<Recipe>)

  constructor() {
    this.recipeService.getRecipesPaginate(0,10).subscribe(value => {
      this.recipes.set(value);
    })
  }



}
