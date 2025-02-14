import {ChangeDetectionStrategy, Component, EventEmitter, inject, Input, OnInit, Output, signal} from '@angular/core';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {RecipeService} from "@app/core/services/recipe/recipe.service";
import {ToastrService} from "ngx-toastr";
import {UntilDestroy} from "@ngneat/until-destroy";
import {Recipe} from "@app/shared/models/recipe";
import {Location} from "@angular/common";
import {UploadRecipePictureComponent} from "@app/shared/features/upload-recipe-picture/upload-recipe-picture.component";

@Component({
  selector: 'app-create-update-recipe',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    UploadRecipePictureComponent
  ],
  templateUrl: './create-update-recipe.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './create-update-recipe.component.scss'
})
@UntilDestroy()
export class CreateUpdateRecipeComponent implements OnInit{
  @Input() recipe : Recipe | undefined = {} as Recipe;
  @Output() recipeChange = new EventEmitter<Recipe>();
  selectedFile = signal<File|null>(null);

  private formBuilder = inject(FormBuilder);
  private recipeService = inject(RecipeService);
  private readonly toastrService = inject(ToastrService);
  private readonly location = inject(Location);

  protected recipeForm = this.formBuilder.group({
    name: new FormControl("", Validators.required),
    picture: new FormControl(""),
    preparationTimeMinutes: new FormControl("1", Validators.required),
    cookingTimeMinutes: new FormControl("1", Validators.required),
    tips: new FormControl(""),
    categorieRecetteEnum: new FormControl("", Validators.required),
  });


  ngOnInit(): void {

    if (this.recipe){
      this.recipeForm.setValue({
        name: this.recipe.name,
        picture: this.recipe.picture,
        preparationTimeMinutes: this.recipe.preparationTimeMinutes.toString(),
        cookingTimeMinutes: this.recipe.cookingTimeMinutes.toString(),
        tips: this.recipe.tips,
        categorieRecetteEnum: this.recipe.categorieRecetteEnum.toUpperCase(),
      })
    }

  }


  onSubmit() {
    if (this.recipeForm.invalid) {
      return;
    }

    const formData = this.recipeForm.getRawValue();

    if (this.recipe){
      this.updateRecipe(this.recipe.id,formData);
      return;
    }

    this.createRecipe(formData);

  }

  createRecipe(formData: any){
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
        this.recipe = value;
        this.recipeChange.emit(value);

        this.uploadToServer(this.selectedFile());
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
      },
      complete:()=>{
      }
    })
  }

  updateRecipe(idRecipe: string,formData: any){

    this.recipeService.updateRecipe(idRecipe,formData).subscribe({
      next:(value)=>{
        this.toastrService.success(
          ` La recette ${value.name} a bien été modifié!`,
          `Succes`,
          {
            closeButton: true,
            progressAnimation: 'decreasing',
            progressBar: true
          }
        );

        this.recipe = value;
        this.recipeChange.emit(value);
        this.uploadToServer(this.selectedFile());
      },
      error:(err)=>{
        this.toastrService.error(
          ` La recette ${formData.name} n'a pas été modifié!`,
          `Echec`,
          {
            closeButton: true,
            progressAnimation: 'decreasing',
            progressBar: true
          }
        );
      }, complete:()=>{
      }
    })
  }

  goBack(){
    this.location.back();
  }


  uploadToServer(file : File | null ): void {

    if (file && this.recipe){
      this.recipeService.uploadRecipePicture(this.recipe.id, file).subscribe({
        next: (response) => {
        },
        error: (error) => {
          this.toastrService.error('An error occurred while uploading the image');
        },
        complete: () => {
          this.goBack();
        }
      });
    }
  }

  onSelectedFileChange(file: File | null): void {
    this.selectedFile.set(file);
  }
}
