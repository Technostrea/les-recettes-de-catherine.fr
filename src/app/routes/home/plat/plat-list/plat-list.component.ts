import {ChangeDetectionStrategy, Component, inject, OnInit, signal} from '@angular/core';
import {HeaderComponent} from "@app/shared/components/header/header.component";
import {SearchAndFilterComponent} from "@app/shared/features/search-and-filter/search-and-filter.component";
import {RecipeItemCardComponent} from "@app/shared/components/recipe-item-card/recipe-item-card.component";
import {Recipe} from "@app/shared/models/recipe";
import {RecipeService} from "@app/core/services/recipe/recipe.service";
import {RootResponse} from "@app/shared/models/root-response";
import {SearchFilterPipe} from "@app/shared/pipes/search-filter/search-filter.pipe";

@Component({
  selector: 'app-plat-list',
  standalone: true,
  imports: [
    HeaderComponent,
    SearchAndFilterComponent,
    RecipeItemCardComponent,
    SearchFilterPipe
  ],
  templateUrl: './plat-list.component.html',
  styleUrl: './plat-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlatListComponent implements OnInit {
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
    this.selectedCategory.set($event);
    console.log(this.searchTerm())
  }
}
