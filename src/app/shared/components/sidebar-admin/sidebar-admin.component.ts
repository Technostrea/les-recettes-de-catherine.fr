import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AuthService} from "@app/core/services/auth/auth.service";

@Component({
  selector: 'app-sidebar-admin',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './sidebar-admin.component.html',
  styleUrl: './sidebar-admin.component.scss'
})
export class SidebarAdminComponent {
  protected authService = inject(AuthService);
}
