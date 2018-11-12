import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlidesComponent } from "src/app/containers/slides/slides.component";

const slidesRoutes: Routes = [
  { path: '', component: SlidesComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(slidesRoutes)
  ],
  exports: [RouterModule]
})
export class SlidesRoutingModule {}
