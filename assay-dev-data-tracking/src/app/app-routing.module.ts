import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectNavigatorComponent } from "src/app/containers/project-navigator/project-navigator.component";

const routes: Routes = [
  { path: '', component: ProjectNavigatorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
