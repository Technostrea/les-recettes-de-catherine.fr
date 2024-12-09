import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from "@app/shared/components/footer/footer.component";
import {HeaderComponent} from "@app/shared/components/header/header.component";
import {ThemeService} from "@app/core/services/theme/theme.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'les-recettes-de-catherine.fr';
  themeService = inject(ThemeService);
}
