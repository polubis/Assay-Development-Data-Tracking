import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { UtilsModule } from './components/utils/utils.module';

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { reducers } from './store/app.reducers';
import { environment } from '../environments/environment';
import { ProjectEffects } from './store/effects/project.effects';
import { ProjectNavigatorComponent } from './containers/project-navigator/project-navigator.component';
import { HandleRequestService } from "src/app/services/handle-request.service";
import { AsideComponent } from "src/app/components/utils/aside/aside.component";

@NgModule({
  declarations: [
    AppComponent,
    ProjectNavigatorComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UtilsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ProjectEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [HandleRequestService],
  bootstrap: [AppComponent]
})
export class AppModule {}
