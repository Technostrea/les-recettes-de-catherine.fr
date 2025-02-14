import {Component, inject} from '@angular/core';
import {CreateStepComponent} from "@app/shared/features/create-step/create-step.component";
import {Location, UpperCasePipe} from "@angular/common";
import {Router} from "@angular/router";
import {Recipe} from "@app/shared/models/recipe";

@Component({
  selector: 'app-step-store',
  standalone: true,
  imports: [
    CreateStepComponent,
    UpperCasePipe
  ],
  templateUrl: './step-store.component.html',
  styleUrl: './step-store.component.scss'
})
export class StepStoreComponent {
  protected location = inject(Location);
  private readonly router = inject(Router);
  protected extraData = this.router.getCurrentNavigation()?.extras.state?.['recipe'] as Recipe;
}
