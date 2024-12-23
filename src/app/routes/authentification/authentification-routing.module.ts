import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from "@app/routes/authentification/auth/auth.component";

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '', title: 'Authentification', component: AuthComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthentificationRoutingModule {
}
