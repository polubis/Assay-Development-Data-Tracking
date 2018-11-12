import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsModule } from "src/app/components/utils/utils.module";
import { RunsRoutingModule } from "src/app/containers/runs/runs-routing.module";
import { RunsComponent } from "src/app/containers/runs/runs.component";

@NgModule({
  declarations: [
    RunsComponent
  ],
  imports: [
    CommonModule,
    RunsRoutingModule,
    UtilsModule
  ]
})
export class RunsModule {}
