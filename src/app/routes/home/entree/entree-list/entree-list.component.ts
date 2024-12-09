import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SearchAndFilterComponent} from "@app/shared/features/search-and-filter/search-and-filter.component";
import {RecipeItemCardComponent} from "@app/shared/components/recipe-item-card/recipe-item-card.component";
import {HeaderComponent} from "@app/shared/components/header/header.component";
import {Recipe} from "@app/shared/models/recipe";

@Component({
  selector: 'app-entree-list',
  standalone: true,
  imports: [
    SearchAndFilterComponent,
    RecipeItemCardComponent,
    HeaderComponent
  ],
  templateUrl: './entree-list.component.html',
  styleUrl: './entree-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntreeListComponent {
  recipes: Recipe[] = [
    {
      id: "1",
      name: 'Pate Carbonara',
      category: 'plat',
      difficulty: 'facile',
      prepTime: 30,
      imageUrl: "",
      description:"",
      ingredients: [
        {name:'400g spaghetti'},
        {name:'200g pancetta'},
        {name:'4 large eggs'},
        {name:'100g Parmesan cheese, grated'},
        {name:'Salt and black pepper to taste'},
      ],
      steps: [
        {name:'Cook the spaghetti in a large pot of salted boiling water until al dente.'},
        {name:'While the pasta is cooking, fry the pancetta in a large pan until crispy.'},
        {name:'In a bowl, whisk together the eggs, grated Parmesan, salt, and pepper.'},
        {name:'Drain the cooked pasta and add it to the pan with the pancetta.'},
        {name:'Remove the pan from heat and quickly stir in the egg mixture.'},
        {name:'Serve immediately with extra grated Parmesan on top.'},
      ],
    }
  ];

  filterRecipes($event : Recipe[]) {
    this.recipes = $event
  }
}
