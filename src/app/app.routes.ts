import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Accueil',
    loadChildren: () => import('@app/routes/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'home',
    title: 'Accueil',
    loadChildren: () => import('@app/routes/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'auth',
    title: 'Authentification',
    loadChildren: () => import('@app/routes/authentification/authentification.module').then(m => m.AuthentificationModule)
  },
  {
    path: 'not-found',
    title: 'Page non trouvée',
    loadChildren: () => import('@app/routes/not-found/not-found.module').then(m => m.NotFoundModule)
  },
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '**', redirectTo: '/not-found'}
];
