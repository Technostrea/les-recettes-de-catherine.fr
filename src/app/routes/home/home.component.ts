import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeroComponent} from "@app/shared/components/hero/hero.component";
import {RecipeMenuComponent} from "@app/shared/components/recipe-menu/recipe-menu.component";
import {HeaderComponent} from "@app/shared/components/header/header.component";
import {RouterLink} from "@angular/router";
import {FooterComponent} from "@app/shared/components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        HeroComponent,
        RecipeMenuComponent,
        HeaderComponent,
        RouterLink,
        FooterComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  protected message = "Bonjour,  \n" +
    "Je m'appelle Catherine.\nPour moi, chaque recette est une occasion de rendre les gens heureux, de partager un moment de convivialité autour d'un plat savoureux avec mes amies ou ma famille. Mes recettes ne sont pas seulement un plaisir gustatif, elles sont un véritable symbole de partage et de convivialité. J'ai à cœur de vous transmettre mon amour de la cuisine et de vous inviter à découvrir des saveurs qui réchauffent le cœur.  \n" +
    "J'espère sincèrement que mes créations vous régaleront et vous apporteront autant de bonheur qu'à moi !";
}
