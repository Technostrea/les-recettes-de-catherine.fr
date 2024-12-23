import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {RecipeService} from "@app/core/services/recipe/recipe.service";
import {ToastrService} from "ngx-toastr";
import {UntilDestroy} from "@ngneat/until-destroy";

@Component({
  selector: 'app-create-update-recipe',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-update-recipe.component.html',
  styleUrl: './create-update-recipe.component.scss'
})
@UntilDestroy()
export class CreateUpdateRecipeComponent {
  private formBuilder = inject(FormBuilder);
  private recipeService = inject(RecipeService);
  private readonly toastrService = inject(ToastrService);

  protected recipeForm = this.formBuilder.group({
    name: new FormControl("", Validators.required),
    picture: new FormControl(""),
    preparationTimeMinutes: new FormControl(""),
    cookingTimeMinutes: new FormControl(""),
    tips: new FormControl(""),
    categorieRecetteEnum: new FormControl(""),
  });

  onSubmit() {
    if (this.recipeForm.invalid) {
      return;
    }

    const formData = this.recipeForm.getRawValue();

    this.recipeService.createRecipe(formData).subscribe({
      next:(value)=>{
        this.toastrService.success(
          ` La recette ${value.name} a bien été ajouté!`,
          `Succes`,
          {
            closeButton: true,
            progressAnimation: 'decreasing',
            progressBar: true
          }
        );
      },
      error:(err)=>{
        this.toastrService.error(
          ` La recette ${formData.name} n'a pas été ajouté!`,
          `Echec`,
          {
            closeButton: true,
            progressAnimation: 'decreasing',
            progressBar: true
          }
        );
    }
    })
  }
}
