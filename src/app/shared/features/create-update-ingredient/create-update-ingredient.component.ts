import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {UntilDestroy} from "@ngneat/until-destroy";
import {IngredientService} from "@app/core/services/ingredient/ingredient.service";
import {ToastrService} from "ngx-toastr";
import {Location} from "@angular/common";

@Component({
  selector: 'app-create-update-ingredient',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './create-update-ingredient.component.html',
  styleUrl: './create-update-ingredient.component.scss'
})
@UntilDestroy()
export class CreateUpdateIngredientComponent {
  private readonly toastrService = inject(ToastrService);
  private readonly location = inject(Location);
  private fb = inject(FormBuilder);
  private ingredientService = inject(IngredientService);
  protected ingredientForm = this.fb.group({
    nomIngredient: ['', Validators.required],
  });

  onSubmit() {
    if (this.ingredientForm.invalid) {
      return;
    }

    const formData = this.ingredientForm.getRawValue();

    this.ingredientService.createIngredient(formData);
  }

}
