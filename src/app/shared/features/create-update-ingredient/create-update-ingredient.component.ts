import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {UntilDestroy} from "@ngneat/until-destroy";
import {IngredientService} from "@app/core/services/ingredient/ingredient.service";

@Component({
  selector: 'app-create-update-ingredient',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './create-update-ingredient.component.html',
  styleUrl: './create-update-ingredient.component.scss'
})
@UntilDestroy()
export class CreateUpdateIngredientComponent {
  private fb = inject(FormBuilder);
  private ingredientService = inject(IngredientService);
  protected ingredientForm = this.fb.group({
    nomIngredient: ['',]
  });

  onSubmit() {
    if (this.ingredientForm.invalid) {
      return;
    }

    const formData = this.ingredientForm.getRawValue();

    console.log(formData)

    this.ingredientService.createIngredient(formData).subscribe(value => {
      console.log(value)})
  }

}
