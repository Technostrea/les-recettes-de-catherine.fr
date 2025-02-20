import {inject, Injectable} from '@angular/core';
import {environment} from "@env/environment";
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

  createRecipe(recipeDto: RecipeDto | any): Observable<Recipe> {
    return this.httpClient.post<Recipe>(`${this.recipesEndPoint.POST_STORE_RECIPE()}`, recipeDto);
  }

  updateRecipe(idRecipe: string, recipeDto: RecipeDto | any): Observable<Recipe> {

    const recipeDtoWithIdRecipe = {
      ...recipeDto,
      idRecipe
    };

    return this.httpClient.put<Recipe>(`${this.recipesEndPoint.PUT_RECIPE(idRecipe)}`, recipeDtoWithIdRecipe);
  }

  deleteRecipe(idRecipe: string){
    return this.httpClient.delete<Recipe>(`${this.recipesEndPoint.DELETE_RECIPE(idRecipe)}`);
  }

  uploadRecipePicture(idRecipe: string, file: File): Observable<void> {
    const formData = new FormData();
    formData.append('files', file);
    return this.httpClient.post<any>(`${this.recipesEndPoint.POST_UPLOAD_RECIPE_PICTURE(idRecipe)}`, formData);
  }

}
