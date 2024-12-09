import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeroComponent} from "@app/shared/components/hero/hero.component";
import {RecipeMenuComponent} from "@app/shared/components/recipe-menu/recipe-menu.component";
import {HeaderComponent} from "@app/shared/components/header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        HeroComponent,
        RecipeMenuComponent,
        HeaderComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
