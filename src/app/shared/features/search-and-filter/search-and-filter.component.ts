import {Component, Input, OnInit, output} from '@angular/core';
import {Recipe} from "@app/shared/models/recipe";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-search-and-filter',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './search-and-filter.component.html',
  styleUrl: './search-and-filter.component.scss'
})
export class SearchAndFilterComponent implements OnInit {
  @Input({required: true}) recipes: Recipe[] = [];
  @Input({required: true}) category: string = '';

  filteredRecipes: Recipe[] = [];
  searchTerm: string = '';
  selectedCategory: string = '';
  selectedDifficulty: string = '';
  filteredRecipesOut = output<Recipe[]>()

  filterRecipes() {
    this.filteredRecipes = this.recipes.filter((recipe) => {
      const nameMatch = recipe.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const categoryMatch = !this.selectedCategory || recipe.category === this.selectedCategory;
      const selectedDifficulty = !this.selectedDifficulty || recipe.difficulty === this.selectedDifficulty;
      return nameMatch && categoryMatch && selectedDifficulty;
    });

    this.filteredRecipesOut.emit(this.filteredRecipes);

  }

  ngOnInit(): void {
    this.selectedCategory = this.category
    this.filteredRecipes = this.recipes;
  }


}
