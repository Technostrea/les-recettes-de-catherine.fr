import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "@app/routes/home/home.component";
import {DetailRecipeComponent} from "@app/routes/home/detail-recipe/detail-recipe.component";
import {detailRecipeResolver} from "@app/core/resolvers/recipe/detail/detail-recipe.resolver";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'explore',
    title: 'Découvrez mes recettes',
    loadChildren: () => import('@app/routes/home/explore/explore.module').then(m => m.ExploreModule)
  },
  {
    path: 'detail-recipe/:slug',
    title: 'Détail de recette',
    component: DetailRecipeComponent,
    resolve: {recipe: detailRecipeResolver}
  },
  {
    path: 'entrees',
    title: 'Entrées',
    loadChildren: () => import('@app/routes/home/entree/entree.module').then(m => m.EntreeModule)
  },
  {
    path: 'plats',
    title: 'Plats',
    loadChildren: () => import('@app/routes/home/plat/plat.module').then(m => m.PlatModule)
  },
  {
    path: 'desserts',
    title: 'Desserts',
    loadChildren: () => import('@app/routes/home/dessert/dessert.module').then(m => m.DessertModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
