import {Component, inject, OnInit, signal} from '@angular/core';
import {RecipeService} from "@app/core/services/recipe/recipe.service";
import {RouterLink} from "@angular/router";
import {Recipe} from "@app/shared/models/recipe";
import {RootResponse} from "@app/shared/models/root-response";
import {UntilDestroy} from "@ngneat/until-destroy";
import {ToastrService} from "ngx-toastr";
import {environment} from "@env/environment";

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
@UntilDestroy()
export class RecipeListComponent implements OnInit {
  protected readonly Object = Object;
  protected recipeService = inject(RecipeService);
  protected recipes = signal<RootResponse<Recipe>>({} as RootResponse<Recipe>)
  private readonly toastrService = inject(ToastrService);
  protected readonly environment = environment.endpoints.recipes;

  ngOnInit() {
    this.recipeService.getRecipesPaginate(0, 10).subscribe(value => {
      this.recipes.set(value);
    });
  }


  onDeleteRecipe(recipe: Recipe) {

    this.recipeService.deleteRecipe(recipe.id).subscribe({
      next:(value)=>{
        this.toastrService.success(
          ` La recette ${recipe.name} a bien été supprimé!`,
          `Succes`,
          {
            closeButton: true,
            progressAnimation: 'decreasing',
            progressBar: true
          }
        );
      },
      error:(err)=>{
        this.toastrService.error(
          ` La recette ${recipe.name} n'a pas été supprimé!`,
          `Echec`,
          {
            closeButton: true,
            progressAnimation: 'decreasing',
            progressBar: true
          }
        );
      },
      complete:()=>{
        this.ngOnInit();
      }
    })
  }

}
