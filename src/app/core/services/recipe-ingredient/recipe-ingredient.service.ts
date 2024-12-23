import {inject, Injectable} from '@angular/core';
import {environment} from "@env/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RootResponse} from "@app/shared/models/root-response";
import {IngredientDto} from "@app/shared/models/dto/ingredient-dto";
import {RecipeIngredient} from "@app/shared/models/recipe-ingredient";

@Injectable({
  providedIn: 'root'
})
export class RecipeIngredientService {


  private recipesEndPoint = environment.endpoints.recipeIngredients;
  private httpClient = inject(HttpClient);

  getRecipeIngredientsPaginate(page: number = 0, size: number = 10): Observable<RootResponse<RecipeIngredient>> {
    return this.httpClient.get<RootResponse<RecipeIngredient>>(`${this.recipesEndPoint.GET_ALL_RECIPE_INGREDIENT_PAGINATE(page, size)}`)
  }

  get recipeIngredients(): Observable<RecipeIngredient[]> {
    return this.httpClient.get<RecipeIngredient[]>(`${this.recipesEndPoint.GET_ALL_RECIPE_INGREDIENT()}`)
  }

  createRecipeIngredient(ingredientDto: IngredientDto | any): Observable<RecipeIngredient> {
    return this.httpClient.post<RecipeIngredient>(`${this.recipesEndPoint.POST_STORE_RECIPE_INGREDIENT()}`, ingredientDto);
  }
}
