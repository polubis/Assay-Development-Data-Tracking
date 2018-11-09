



import { Project } from "src/app/models/project.model";
import * as ProjectActions from '../actions/project.actions';
import * as fromApp from '../app.reducers';

export interface State {
  projects: Project[];
};

const initialState: State = {
    projects: []
};

export function projectReducer(state = initialState, action: ProjectActions.ProjectActions){
    switch(action.type){
        case ProjectActions.SET_PROJECTS:
            return {
                ...state,
                projects: [...action.payload]
            };
        default:
            return state;
    }
}