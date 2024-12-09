import { ResolveFn } from '@angular/router';

export const customTitleResolver: ResolveFn<string> = (route, state) => {
  const title = route.url;
  return "title";
};
