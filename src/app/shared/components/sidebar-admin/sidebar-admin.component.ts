import {Component, inject, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AuthService} from "@app/core/services/auth/auth.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-sidebar-admin',
  standalone: true,
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './sidebar-admin.component.html',
  styleUrl: './sidebar-admin.component.scss'
})
export class SidebarAdminComponent {
  @Input() isOpen = false
  protected authService = inject(AuthService);
}
