import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DessertListComponent} from "@app/routes/home/dessert/dessert-list/dessert-list.component";
import {customTitleResolver} from "@app/core/resolvers/custom-title/custom-title.resolver";

const routes: Routes = [
  {path: '', component: DessertListComponent, title: customTitleResolver}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DessertRoutingModule {
}
