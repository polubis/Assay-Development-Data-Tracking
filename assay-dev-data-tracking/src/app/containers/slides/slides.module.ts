import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsModule } from "src/app/components/utils/utils.module";
import { SlidesRoutingModule } from "src/app/containers/slides/slides-routing.module";
import { SlidesComponent } from "src/app/containers/slides/slides.component";

@NgModule({
  declarations: [
    SlidesComponent
  ],
  imports: [
    CommonModule,
    SlidesRoutingModule,
    UtilsModule
  ]
})
export class SlidesModule {}
