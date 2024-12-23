import {inject, Injectable} from '@angular/core';
import {environment} from "@env/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RootResponse} from "@app/shared/models/root-response";
import {StepDto} from "@app/shared/models/dto/step-dto";
import {Step} from "@app/shared/models/step";

@Injectable({
  providedIn: 'root'
})
export class StepService {
  private recipesEndPoint = environment.endpoints.step;
  private httpClient = inject(HttpClient);

  get recipes(): Observable<RootResponse<Step>> {
    return this.httpClient.get<RootResponse<Step>>(`${this.recipesEndPoint.GET_ALL_STEP()}`)
  }

  getRecipesPaginate(page: number = 0, size: number = 10): Observable<RootResponse<Step>> {
    return this.httpClient.get<RootResponse<Step>>(`${this.recipesEndPoint.GET_ALL_STEP_PAGINATE(page, size)}`)
  }

  createRecipe(stepDto: StepDto | any): Observable<Step> {
    return this.httpClient.post<Step>(`${this.recipesEndPoint.POST_STORE_STEP()}`, stepDto);
  }
}
