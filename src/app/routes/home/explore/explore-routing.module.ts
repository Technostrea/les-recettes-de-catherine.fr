import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExploreRecipesComponent} from "@app/routes/home/explore/explore-recipes/explore-recipes.component";

const routes: Routes = [
  {path: '', component: ExploreRecipesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule {
}
