import {Component, inject, OnInit, signal} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RecipeService} from "@app/core/services/recipe/recipe.service";
import {RootResponse} from "@app/shared/models/root-response";
import {Recipe} from "@app/shared/models/recipe";
import {IngredientService} from "@app/core/services/ingredient/ingredient.service";
import {UntilDestroy} from "@ngneat/until-destroy";
import {Ingredient} from "@app/shared/models/ingredient";
import {RecipeIngredientService} from "@app/core/services/recipe-ingredient/recipe-ingredient.service";

@Component({
  selector: 'app-create-update-recipe-ingredient',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './create-update-recipe-ingredient.component.html',
  styleUrl: './create-update-recipe-ingredient.component.scss'
})
@UntilDestroy()
export class CreateUpdateRecipeIngredientComponent implements OnInit{
  protected recipeService: RecipeService = inject(RecipeService);
  protected ingredientService: IngredientService = inject(IngredientService);
  protected recipeIngredientService : RecipeIngredientService = inject(RecipeIngredientService);

  private fb: FormBuilder = inject(FormBuilder)

  protected recipeForm: FormGroup = this.fb.group({
    idRecipe: ['', Validators.required],
    ingredients: this.fb.array([this.createIngredient()])
  });

  protected recipes = signal<RootResponse<Recipe>>({} as RootResponse<Recipe>)
  protected ingredientsData = signal<Ingredient[]>([])

  ngOnInit() {
    this.recipeService.getRecipesPaginate(0, 10).subscribe(value => {
      this.recipes.set(value);
    });

    this.ingredientService.ingredients.subscribe(value => {
      this.ingredientsData.set(value);
    })
  }


  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  createIngredient(): FormGroup {
    return this.fb.group({
      idIngredient: ['', Validators.required],
      quantity: ['', Validators.required],
      unity: ['', Validators.required]
    });
  }

  addIngredient(): void {
    this.ingredients.push(this.createIngredient());
  }

  removeIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }

  onSubmit(): void {
    if (this.recipeForm.invalid) {
      return;
    }

    const recipeData = this.recipeForm.value;

    const ingredientsWithId = recipeData.ingredients.map((ingredient: any) => ({
      ...ingredient,
      idRecipe: recipeData.idRecipe
    }));

    this.saveIngredients(ingredientsWithId);


  }

  saveIngredients(ingredients: Ingredient[]): void {
    ingredients.forEach(value => {
      this.recipeIngredientService.createRecipeIngredient(value).subscribe(value1 => {
        console.log(value1)})
    });
  }
}
