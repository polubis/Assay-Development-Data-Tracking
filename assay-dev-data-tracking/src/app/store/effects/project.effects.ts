


import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
import * as ProjectActions from '../actions/project.actions';
import { switchMap, map, tap } from "rxjs/operators";
import { Project } from '../../models/project.model';
import { of } from "rxjs";
import { catchError } from "rxjs/internal/operators/catchError";
import { HandleRequestService } from "src/app/services/handle-request.service";
@Injectable()
export class ProjectEffects {
  constructor(
    private actions$: Actions,
    private handleRequestService: HandleRequestService
  ) {}

  @Effect()
  projectFetch = this.actions$.ofType(ProjectActions.FETCH_PROJECTS).pipe(
    switchMap((action: ProjectActions.FetchProjects) => {
      return this.handleRequestService.handleRequest("fetchProjects");
    }),
    // map(data => {
    //   const projects: Project[] = [];
    //   Object.keys(data).forEach(element => {
    //     const value = data[element];
    //     projects.push(
    //       new Project(
    //         value.id,
    //         value.title,
    //         323213,
    //         "Project FUnding",
    //         "Thomas Bhurmuk",
    //         "on Hold",
    //         "19-12-2017",
    //         value.userId
    //       )
    //     );
    //   });
    //   return {
    //     type: ProjectActions.SET_PROJECTS,
    //     payload: projects
    //   };
    // })
  );
}