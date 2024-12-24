import {ApplicationConfig} from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  TitleStrategy,
  withInMemoryScrolling,
  withPreloading,
  withViewTransitions
} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideHttpClient, withFetch} from "@angular/common/http";
import {TemplatePageTitleStrategy} from "@app/core/strategies/TemplatePageTitleStrategy";
import {provideToastr} from "ngx-toastr";
import player from 'lottie-web';
import {provideLottieOptions} from "ngx-lottie";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions(),
      withPreloading(PreloadAllModules),
      withInMemoryScrolling(
        {
          scrollPositionRestoration: 'enabled',
          anchorScrolling: 'enabled',
        }
      )),
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
    provideAnimations(),
    provideHttpClient(withFetch()),
    provideLottieOptions({
      player: () => player,
    }),
    provideToastr({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }), // Toastr providers

  ]
};
