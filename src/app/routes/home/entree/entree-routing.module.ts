import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EntreeListComponent} from "@app/routes/home/entree/entree-list/entree-list.component";

const routes: Routes = [
  {path: '', component: EntreeListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntreeRoutingModule {
}
