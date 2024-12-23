import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {HeaderComponent} from "@app/shared/components/header/header.component";
import {JsonPipe, Location} from "@angular/common";
import {Title} from "@angular/platform-browser";
import {of} from "rxjs";
import {Recipe} from "@app/shared/models/recipe";
import {TimeFormatPipe} from "@app/shared/pipes/time-format/time-format.pipe";
import {FooterComponent} from "@app/shared/components/footer/footer.component";

@Component({
  selector: 'app-detail-recipe',
  standalone: true,
  imports: [
    RouterLink,
    HeaderComponent,
    TimeFormatPipe,
    FooterComponent,
    JsonPipe
  ],
  templateUrl: './detail-recipe.component.html',
  styleUrl: './detail-recipe.component.scss'
})
export class DetailRecipeComponent implements OnInit {
  protected location = inject(Location);
  title = inject(Title)

  private readonly route = inject(ActivatedRoute);
  protected extraData: { recipe: Recipe } = this.route.snapshot.data['recipe'];

  recipe: Recipe | undefined = undefined;

  ngOnInit(): void {
    this.recipe = this.extraData.recipe;

    of(`${this.recipe.name}`).subscribe({
      next: (title) => {
        this.title.setTitle(`${this.title.getTitle()} | ${title}`)
      }
    });
  }
}
