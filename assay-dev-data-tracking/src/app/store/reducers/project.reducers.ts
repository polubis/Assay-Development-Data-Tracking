



import { Project } from "src/app/models/project.model";
import * as ProjectActions from '../actions/project.actions';
import * as fromApp from '../app.reducers';

export interface State {
  projects: Project[],
  loading: boolean
};

const initialState: State = {
    projects: [],
    loading: false
};

export function projectReducer(state = initialState, action: ProjectActions.ProjectActions){
    switch(action.type){
        case ProjectActions.SET_PROJECTS:
            return {
                ...state,
                projects: [...action.payload]
            };
        case ProjectActions.FETCH_PROJECTS:
            return { 
                ...state, 
                loading: true
            };
        case ProjectActions.END_FETCH_PROJECTS:
            return { 
                ...state,
                loading: false
            };
        default:
            return state;
    }
}