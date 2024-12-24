import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HeaderAdminComponent} from "@app/shared/components/header-admin/header-admin.component";
import {SidebarAdminComponent} from "@app/shared/components/sidebar-admin/sidebar-admin.component";
import {ConfettiService} from "@app/core/services/confetti/confetti.service";

@Component({
  selector: 'app-administration',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderAdminComponent,
    SidebarAdminComponent
  ],
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.scss'
})
export class AdministrationComponent implements OnInit {
  protected confettiService = inject(ConfettiService);
  protected isOpen = false;

  ngOnInit(): void {
    this.confettiService.celebrate();
  }

  onOpenSidebar() {
    this.isOpen = !this.isOpen;
  }

}
