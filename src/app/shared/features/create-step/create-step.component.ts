import {Component, inject, OnInit, signal} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RecipeService} from "@app/core/services/recipe/recipe.service";
import {RootResponse} from "@app/shared/models/root-response";
import {Recipe} from "@app/shared/models/recipe";
import {StepService} from "@app/core/services/step/step.service";
import {Step} from "@app/shared/models/step";
import {UntilDestroy} from "@ngneat/until-destroy";

@Component({
  selector: 'app-create-step',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './create-step.component.html',
  styleUrl: './create-step.component.scss'
})
@UntilDestroy()
export class CreateStepComponent implements OnInit {
  protected recipeService: RecipeService = inject(RecipeService);
  private stepService: StepService = inject(StepService);
  private fb = inject(FormBuilder);

  protected stepForm = this.fb.group({
    idRecette: ['', Validators.required],
    steps: this.fb.array([this.createStep()])
  });

  protected recipes = signal<RootResponse<Recipe>>({} as RootResponse<Recipe>)

  ngOnInit() {
    this.recipeService.getRecipesPaginate(0, 10).subscribe(value => {
      this.recipes.set(value);
    });
  }

  get steps(): FormArray {
    return this.stepForm.get('steps') as FormArray;
  }

  createStep(): FormGroup {
    return this.fb.group({
      numero_etape: ['', Validators.required],
      description: ['', Validators.required]
    });
  }


  addStep(): void {
    this.steps.push(this.createStep());
  }

  removeStep(index: number): void {
    this.steps.removeAt(index);
  }

  onSubmit(): void {
    if (this.stepForm.invalid) {
      return;
    }

    const recipeData = this.stepForm.value;

    const stepsWithId = recipeData.steps!.map((step: any) => ({
      ...step,
      idRecette: recipeData.idRecette
    }));

    this.saveSteps(stepsWithId);

  }


  saveSteps(steps: Step[]): void {
    steps.forEach(value => {
      this.stepService.createRecipe(value).subscribe(value1 => {
        console.log(value1)})
    });
  }

}
