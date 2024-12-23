import {Component, inject, OnInit, signal} from '@angular/core';
import {RouterLink} from "@angular/router";
import {IngredientService} from "@app/core/services/ingredient/ingredient.service";
import {Ingredient} from "@app/shared/models/ingredient";
import {UntilDestroy} from "@ngneat/until-destroy";
import {RootResponse} from "@app/shared/models/root-response";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-ingredient-list',
  standalone: true,
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './ingredient-list.component.html',
  styleUrl: './ingredient-list.component.scss'
})
@UntilDestroy()
export class IngredientListComponent implements OnInit {

  protected ingredientService: IngredientService = inject(IngredientService);
  protected ingredients = signal<RootResponse<Ingredient>>({} as RootResponse<Ingredient>)

  ngOnInit() {
    this.ingredientService.getIngredientsPaginate(0,10).subscribe(value => {
      this.ingredients.set(value);
      console.log(value)
    });
  }
}
