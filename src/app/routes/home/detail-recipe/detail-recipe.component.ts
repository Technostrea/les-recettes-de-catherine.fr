import {ChangeDetectionStrategy, Component, inject, OnInit, signal} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeaderComponent} from "@app/shared/components/header/header.component";
import {Location} from "@angular/common";
import {Title} from "@angular/platform-browser";
import {of} from "rxjs";
import {Recipe} from "@app/shared/models/recipe";
import {TimeFormatPipe} from "@app/shared/pipes/time-format/time-format.pipe";
import {FooterComponent} from "@app/shared/components/footer/footer.component";
import {RecipeIngredientService} from "@app/core/services/recipe-ingredient/recipe-ingredient.service";
import {RecipeIngredient} from "@app/shared/models/recipe-ingredient";
import {UntilDestroy} from "@ngneat/until-destroy";
import {environment} from "@env/environment";

@Component({
  selector: 'app-detail-recipe',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    TimeFormatPipe,
    FooterComponent
  ],
  templateUrl: './detail-recipe.component.html',
  styleUrl: './detail-recipe.component.scss'
})
@UntilDestroy()
export class DetailRecipeComponent implements OnInit {
  protected location = inject(Location);
  protected recipeIngredientService = inject(RecipeIngredientService);
  protected readonly environment = environment.endpoints.recipes;
  title = inject(Title)

  private readonly route = inject(ActivatedRoute);
  protected extraData: { recipe: Recipe } = this.route.snapshot.data['recipe'];

  recipe: Recipe | undefined = undefined;
  recipeIngredients = signal<RecipeIngredient[]>([]);


  ngOnInit(): void {
    this.recipe = this.extraData.recipe;

    of(`${this.recipe.name}`).subscribe({
      next: (title) => {
        this.title.setTitle(`${this.title.getTitle()} | ${title}`)
      }
    });
    this.recipeIngredientService.getRecipeIngredientsByRecipe(this.extraData.recipe.id).subscribe({
      next: (value) => {
        this.recipeIngredients.set(value);
      },
      error: (error) => {
      },
      complete: () => {
      }
    });
  }

}
