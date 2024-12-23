import {inject, Injectable} from '@angular/core';
import {environment} from "@env/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RootResponse} from "@app/shared/models/root-response";
import {IngredientDto} from "@app/shared/models/dto/ingredient-dto";
import {Ingredient} from "@app/shared/models/ingredient";

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private recipesEndPoint = environment.endpoints.ingredients;
  private httpClient = inject(HttpClient);

  getIngredientsPaginate(page: number = 0, size: number = 10): Observable<RootResponse<Ingredient>> {
    return this.httpClient.get<RootResponse<Ingredient>>(`${this.recipesEndPoint.GET_ALL_INGREDIENT_PAGINATE(page, size)}`)
  }

  get ingredients(): Observable<Ingredient[]> {
    return this.httpClient.get<Ingredient[]>(`${this.recipesEndPoint.GET_ALL_INGREDIENT()}`)
  }

  createIngredient(ingredientDto: IngredientDto | any): Observable<Ingredient> {
    return this.httpClient.post<Ingredient>(`${this.recipesEndPoint.POST_STORE_INGREDIENT()}`, ingredientDto);
  }
}
