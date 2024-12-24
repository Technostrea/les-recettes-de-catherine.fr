import { Component } from '@angular/core';
import {AnimationItem} from "lottie-web";
import {AnimationOptions, LottieComponent} from "ngx-lottie";

@Component({
  selector: 'app-christmas-tree',
  standalone: true,
  imports: [
    LottieComponent
  ],
  templateUrl: './christmas-tree.component.html',
  styleUrl: './christmas-tree.component.scss'
})
export class ChristmasTreeComponent {
  private animationItem: AnimationItem | undefined;

  options: AnimationOptions = {
    path: 'assets/animations/sapin.json',
    loop: true,
    autoplay: true
  };

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
}
