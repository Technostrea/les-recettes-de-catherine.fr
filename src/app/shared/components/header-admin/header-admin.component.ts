import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AuthService} from "@app/core/services/auth/auth.service";
import {environment} from "@env/environment";

@Component({
  selector: 'app-header-admin',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header-admin.component.html',
  styleUrl: './header-admin.component.scss'
})
export class HeaderAdminComponent {
  protected authService = inject(AuthService);
  protected readonly environment = environment;
}
