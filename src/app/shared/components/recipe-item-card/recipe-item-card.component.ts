import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {Recipe} from "@app/shared/models/recipe";
import {TimeFormatPipe} from "@app/shared/pipes/time-format/time-format.pipe";

@Component({
  selector: 'app-recipe-item-card',
  standalone: true,
  imports: [
    RouterLink,
    TimeFormatPipe
  ],
  templateUrl: './recipe-item-card.component.html',
  styleUrl: './recipe-item-card.component.scss'
})
export class RecipeItemCardComponent {
  @Input({required: true}) recipe: Recipe | undefined = undefined;
}
