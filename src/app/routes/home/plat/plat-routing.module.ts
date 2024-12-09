import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlatListComponent} from "@app/routes/home/plat/plat-list/plat-list.component";

const routes: Routes = [
  {path: '', component: PlatListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatRoutingModule {
}
