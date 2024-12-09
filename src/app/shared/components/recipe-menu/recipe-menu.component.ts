import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-recipe-menu',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './recipe-menu.component.html',
  styleUrl: './recipe-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeMenuComponent {

}
