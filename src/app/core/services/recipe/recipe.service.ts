import {inject, Injectable} from '@angular/core';
import {environment} from "@env/environment.development";
import {HttpClient} from "@angular/common/http";
import {RecipeDto} from "@app/shared/models/dto/recipe-dto";
import {Observable} from "rxjs";
import {Recipe} from "@app/shared/models/recipe";
import {RootResponse} from "@app/shared/models/root-response";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipesEndPoint = environment.endpoints.recipes;
  private httpClient = inject(HttpClient);

  get recipes(): Observable<RootResponse<Recipe>> {
    return this.httpClient.get<RootResponse<Recipe>>(`${this.recipesEndPoint.GET_ALL_RECIPE()}`)
  }

  getRecipesPaginate(page: number = 0, size: number = 10): Observable<RootResponse<Recipe>> {
    return this.httpClient.get<RootResponse<Recipe>>(`${this.recipesEndPoint.GET_ALL_RECIPE_PAGINATE(page, size)}`)
  }

  createRecipe(recipeDto: RecipeDto | any ): Observable<Recipe> {
    return this.httpClient.post<Recipe>(`${this.recipesEndPoint.POST_STORE_RECIPE()}`, recipeDto);
  }
}
