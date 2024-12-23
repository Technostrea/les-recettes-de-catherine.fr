import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HeaderAdminComponent} from "@app/shared/components/header-admin/header-admin.component";
import {SidebarAdminComponent} from "@app/shared/components/sidebar-admin/sidebar-admin.component";

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
export class AdministrationComponent {

}
