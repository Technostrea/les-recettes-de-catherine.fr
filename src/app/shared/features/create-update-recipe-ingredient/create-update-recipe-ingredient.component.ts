import {ChangeDetectionStrategy, Component, EventEmitter, inject, Input, OnInit, Output, signal} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RecipeService} from "@app/core/services/recipe/recipe.service";
import {RootResponse} from "@app/shared/models/root-response";
import {Recipe} from "@app/shared/models/recipe";
import {IngredientService} from "@app/core/services/ingredient/ingredient.service";
import {UntilDestroy} from "@ngneat/until-destroy";
import {Ingredient} from "@app/shared/models/ingredient";
import {RecipeIngredientService} from "@app/core/services/recipe-ingredient/recipe-ingredient.service";
import {ToastrService} from "ngx-toastr";
import {Location} from "@angular/common";
import {RecipeIngredient} from "@app/shared/models/recipe-ingredient";
import {Unity} from "@app/shared/models/unity";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-update-recipe-ingredient',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './create-update-recipe-ingredient.component.html',
  styleUrl: './create-update-recipe-ingredient.component.scss'
})
@UntilDestroy()
export class CreateUpdateRecipeIngredientComponent implements OnInit {

  @Input() recipe : Recipe | undefined = {} as Recipe;
  @Output() recipeChange = new EventEmitter<Recipe>();

  protected recipeService: RecipeService = inject(RecipeService);
  protected ingredientService: IngredientService = inject(IngredientService);
  protected recipeIngredientService : RecipeIngredientService = inject(RecipeIngredientService);
  private readonly toastrService = inject(ToastrService);
  private readonly location = inject(Location);
  private readonly router = inject(Router);

  private fb: FormBuilder = inject(FormBuilder)

  protected recipeForm: FormGroup = this.fb.group({
    idRecipe: ['', Validators.required],
    ingredients: this.fb.array([]) //this.fb.array([this.createIngredient()])
  });

  protected readonly unities : Unity[] = [
    { name:'Gramme', symbol: 'G'},
    { name:'Kilogramme', symbol: 'KG'},
    { name:'Litre', symbol: 'L'},
    { name:'Millilitre', symbol: 'ML'},
    { name:'Centilitre', symbol: 'CL'},
    { name:'Cuillère à soupe', symbol: 'CUILLERE_SOUPE'},
    { name:'Cuillère à café', symbol: 'CUILLERE_CAFE'},
    { name:'Tranche', symbol: 'TRANCHE'},
    { name:'Aucune', symbol: 'AUCUNE'},
    { name:'Gousse', symbol: 'GOUSSE'},
    { name:'Sachet', symbol: 'SACHET'},
    { name:'Poignée', symbol: 'POIGNEE'},
  ];

  protected recipes = signal<RootResponse<Recipe>>({} as RootResponse<Recipe>)
  protected ingredientsData = signal<Ingredient[]>([])

  ngOnInit() {

    if (this.recipe){

      this.recipeIngredientService.getRecipeIngredientsByRecipe(this.recipe.id).subscribe({
        next: (value) => {
          this.addIngredient(value);
        },
        error: (err) => {

        }
      });

      this.recipeForm.patchValue({
        idRecipe: this.recipe.id
      });

    }

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

  createIngredient(recipeIngredient: RecipeIngredient = {} as RecipeIngredient): FormGroup {
    let recipeIngredientForm = this.fb.group({
      idIngredient: ["", Validators.required],
      quantity: [recipeIngredient.quantity??"1", Validators.required],
      unity: [recipeIngredient.unity??"", Validators.required]
    });

    if ('ingredient' in recipeIngredient){
      recipeIngredientForm.patchValue({
        idIngredient: recipeIngredient.ingredient.idIngredient
      });
    }

    return recipeIngredientForm;
  }

  addIngredient(recipeIngredients : RecipeIngredient[] = []): void {
    if (recipeIngredients.length === 0){
      this.ingredients.push(this.createIngredient());
      return;
    }

    recipeIngredients.forEach((value) => {
      this.ingredients.push(this.createIngredient(value));
    });
  }

  removeIngredient(index: number): void {
    const ingredient = this.ingredients.at(index).value;
    this.ingredients.removeAt(index);
    if (this.recipe){
      this.deleteIngredient(this.recipe.id, ingredient.idIngredient);
    }
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
    ingredients.forEach((value,index,array) => {
      this.recipeIngredientService.createRecipeIngredient(value).subscribe(
        {
          next: (value) => {
            console.log(value);
            if (index === array.length - 1){
              this.toastrService.success(
                ` Les ingredients ont bien été ajouté!`,
                `Succes`,
                {
                  closeButton: true,
                  progressAnimation: 'decreasing',
                  progressBar: true
                }
              )
            }
          },
          error: (error) => {

            this.toastrService.error(
              ` L'ingredient ${value.name} n'a pas été ajouté!`,
              `Echec`,
              {
                closeButton: true,
                progressAnimation: 'decreasing',
                progressBar: true
              }
            );
          },
          complete: () => {
            this.router.navigate(['/admin/recipe-list']);
          }
        }
      )
    });
  }

  deleteIngredient(recipeId: string, ingredientId: string): void {
    this.recipeIngredientService.deleteRecipeIngredient(recipeId, ingredientId).subscribe({
      next: (value) => {
        this.toastrService.success(
          ` L'ingredient a bien été supprimé!`,
          `Succes`,
          {
            closeButton: true,
            progressAnimation: 'decreasing',
            progressBar: true
          }
        );
      },
      error: (error) => {
        this.toastrService.error(
          ` L'ingredient n'a pas été supprimé!`,
          `Echec`,
          {
            closeButton: true,
            progressAnimation: 'decreasing',
            progressBar: true
          }
        );
      },
      complete: () => {
        this.router.navigate(['/admin/recipe-list']);
      }
    });
  }

  goBack(){
    this.location.back();
  }
}
