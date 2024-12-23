import {Component, inject} from '@angular/core';
import {
  CreateUpdateIngredientComponent
} from "@app/shared/features/create-update-ingredient/create-update-ingredient.component";
import {CreateStepComponent} from "@app/shared/features/create-step/create-step.component";
import {Location} from "@angular/common";

@Component({
  selector: 'app-ingredient-store',
  standalone: true,
  imports: [
    CreateUpdateIngredientComponent,
    CreateStepComponent
  ],
  templateUrl: './ingredient-store.component.html',
  styleUrl: './ingredient-store.component.scss'
})
export class IngredientStoreComponent {
  protected location = inject(Location)
}
