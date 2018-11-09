import { Action } from "@ngrx/store";
import { Project } from '../../models/project.model';

export const SET_PROJECTS = "[Project] SET_PROJECTS";
export const FETCH_PROJECTS = "[Project] FETCH_PROJECTS";


export class SetProjects implements Action{
    readonly type = SET_PROJECTS;

    constructor(public payload: Project[]){}
}

export class FetchProjects implements Action{
    readonly type = FETCH_PROJECTS;
}

export type ProjectActions = SetProjects | FetchProjects;