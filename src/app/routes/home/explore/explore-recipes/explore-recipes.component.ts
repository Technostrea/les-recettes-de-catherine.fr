import {Component, inject, OnInit, signal} from '@angular/core';
import {SearchAndFilterComponent} from "@app/shared/features/search-and-filter/search-and-filter.component";
import {RecipeItemCardComponent} from "@app/shared/components/recipe-item-card/recipe-item-card.component";
import {Recipe} from "@app/shared/models/recipe";
import {HeaderComponent} from "@app/shared/components/header/header.component";
import {RecipeService} from "@app/core/services/recipe/recipe.service";
import {RootResponse} from "@app/shared/models/root-response";
import {UntilDestroy} from "@ngneat/until-destroy";
import {FooterComponent} from "@app/shared/components/footer/footer.component";
import {SearchFilterPipe} from "@app/shared/pipes/search-filter/search-filter.pipe";

@Component({
  selector: 'app-explore-recipes',
  standalone: true,
  imports: [
    SearchAndFilterComponent,
    RecipeItemCardComponent,
    HeaderComponent,
    FooterComponent,
    SearchFilterPipe
  ],
  templateUrl: './explore-recipes.component.html',
  styleUrl: './explore-recipes.component.scss'
})
@UntilDestroy()
export class ExploreRecipesComponent implements OnInit {
  protected recipeService = inject(RecipeService);
  protected recipes = signal<RootResponse<Recipe>>({} as RootResponse<Recipe>)

  searchTerm = signal<string>('');
  selectedCategory= signal<string>('');


  ngOnInit() {
    this.recipeService.getRecipesPaginate(0, 10).subscribe(value => {
      this.recipes.set(value);
    });

  }

  filterBySearchRecipes($event: string) {
    this.searchTerm.set($event)
  }

  filterByCategoryRecipes($event: string) {
    this.selectedCategory.set($event)
  }
}
