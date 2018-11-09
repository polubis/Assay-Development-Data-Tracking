import { ActionReducerMap } from '@ngrx/store';

import * as fromProject from './reducers/project.reducers';

export interface AppState {
    project: fromProject.State
};

export const reducers: ActionReducerMap<AppState> = {
    project: fromProject.projectReducer
};