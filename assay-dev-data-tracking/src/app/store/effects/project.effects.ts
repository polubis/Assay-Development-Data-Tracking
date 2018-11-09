


import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
import * as ProjectActions from '../actions/project.actions';
import { switchMap, map, tap } from "rxjs/operators";
import { Project } from '../../models/project.model';
@Injectable()
export class ProjectEffects {
    
    constructor(private actions$: Actions, private httpClient: HttpClient){
    }

    @Effect()
    projectFetch = this.actions$
        .ofType(ProjectActions.FETCH_PROJECTS)
        .pipe(
            switchMap((action: ProjectActions.FetchProjects) => {
                return this.httpClient.get("https://jsonplaceholder.typicode.com/posts");
            }),
            map(data => {
                return { 
                    type: ProjectActions.SET_PROJECTS,
                    payload: data
                };
            })
        )
}