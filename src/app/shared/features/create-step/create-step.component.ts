import {Component, EventEmitter, inject, Input, OnInit, Output, signal} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RecipeService} from "@app/core/services/recipe/recipe.service";
import {RootResponse} from "@app/shared/models/root-response";
import {Recipe} from "@app/shared/models/recipe";
import {StepService} from "@app/core/services/step/step.service";
import {Step} from "@app/shared/models/step";
import {UntilDestroy} from "@ngneat/until-destroy";
import {ToastrService} from "ngx-toastr";
import {Location} from "@angular/common";
import {Router} from "@angular/router";

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

  @Input() recipe : Recipe | undefined = {} as Recipe;
  @Output() recipeChange = new EventEmitter<Recipe>();

  protected recipeService: RecipeService = inject(RecipeService);
  private stepService: StepService = inject(StepService);
  private fb = inject(FormBuilder);
  private readonly toastrService = inject(ToastrService);
  private readonly location = inject(Location);
  private readonly router = inject(Router);

  protected stepForm = this.fb.group({
    idRecette: ['', Validators.required],
    steps: this.fb.array([])
  });

  protected recipes = signal<RootResponse<Recipe>>({} as RootResponse<Recipe>)

  ngOnInit() {

    if (this.recipe){
      this.stepForm.patchValue({
        idRecette: this.recipe.id
      });

      if (this.recipe.steps) {
        this.addStep(this.recipe.steps);
      }

    }

    this.recipeService.getRecipesPaginate(0, 10).subscribe(value => {
      this.recipes.set(value);
    });
  }

  get steps(): FormArray {
    return this.stepForm.get('steps') as FormArray;
  }

  createStep(step : Step = {} as Step): FormGroup {
    let stepForm = this.fb.group({
      id: [""],
      numStep: [step.numStep, Validators.required],
      description: [step.description, Validators.required]
    });

    if ('id' in step){
      stepForm.patchValue({
        id: step.id
      });
    }

    return stepForm;
  }


  addStep(steps: Step[] = []): void {
    if (steps.length === 0){
      this.steps.push(this.createStep());
      return;
    }

    steps.forEach((value) => {
      this.steps.push(this.createStep(value));
    });

  }

  removeStep(index: number): void {
    const step: Step = this.steps.at(index).value;
    this.steps.removeAt(index);
    this.deleteStep(step.id);
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
    steps.forEach((value, index,array) => {
      this.stepService.createStep(value).subscribe(
        {
          next: (value) => {

            if (index === array.length - 1){
              this.toastrService.success(
                ` Les étapes ont bien été ajouté!`,
                `Succes`,
                {
                  closeButton: true,
                  progressAnimation: 'decreasing',
                  progressBar: true
                }
              );
            }

          },
          error: (err) => {

            this.toastrService.error(
              ` L'etape numero ${value.numStep} n'a pas été ajouté!`,
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

  deleteStep(stepId: string){
    this.stepService.deleteStep(stepId).subscribe({
      next:(value)=>{
        this.toastrService.success(
          ` L'étape a bien été supprimé!`,
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
          ` L'etape n'a pas été supprimé!`,
          `Echec`,
          {
            closeButton: true,
            progressAnimation: 'decreasing',
            progressBar: true
          }
        );
      }
    });
  }

  goBack(){
    this.location.back();
  }

}
