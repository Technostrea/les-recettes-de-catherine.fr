import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeListComponent} from "@app/routes/administration/recipe-list/recipe-list.component";
import {RecipeStoreComponent} from "@app/routes/administration/recipe-store/recipe-store.component";
import {AdministrationComponent} from "@app/routes/administration/administration.component";
import {IngredientListComponent} from "@app/routes/administration/ingredient-list/ingredient-list.component";
import {IngredientStoreComponent} from "@app/routes/administration/ingredient-store/ingredient-store.component";
import {authGuard} from "@app/core/guards/authentication/auth.guard";
import {ProfilComponent} from "@app/routes/administration/profil/profil.component";

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {
    path: '', title: 'Administration',
    component: AdministrationComponent,
    canActivate: [authGuard],
    children: [
      {path: 'recipe-list', title: 'Mes recettes', component: RecipeListComponent},
      {path: 'recipe-store', title: 'Mettre à jour une recette', component: RecipeStoreComponent},
      {path: 'ingredient-list', title: 'Mes ingredients', component: IngredientListComponent},
      {path: 'ingredient-store', title: 'Mettre à jour un ingredient', component: IngredientStoreComponent},
      {path: 'profile', title: 'Mon profil', component: ProfilComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule {
}
