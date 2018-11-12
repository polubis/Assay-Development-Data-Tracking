import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ProjectNavigatorComponent } from "src/app/containers/project-navigator/project-navigator.component";

const routes: Routes = [
  { path: '', component: ProjectNavigatorComponent },
  { path: 'runs', loadChildren: './containers/runs/runs.module.ts#RunsModule' },
  { path: 'slides', loadChildren: './containers/slides/slides.module.ts#SlidesModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }