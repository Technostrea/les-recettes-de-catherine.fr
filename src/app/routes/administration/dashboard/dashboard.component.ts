import { Component } from '@angular/core';
import {ChristmasTreeComponent} from "@app/shared/components/christmas-tree/christmas-tree.component";
import {LottieComponent} from "ngx-lottie";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ChristmasTreeComponent,
    LottieComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
