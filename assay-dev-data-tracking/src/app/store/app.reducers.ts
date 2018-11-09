import { ActionReducerMap } from '@ngrx/store';

import * as fromProject from './reducers/project.reducers';
import * as fromPrompt from './reducers/prompts.reducers';

export interface AppState {
    project: fromProject.State,
    prompt: fromPrompt.State
};

export const reducers: ActionReducerMap<AppState> = {
    project: fromProject.projectReducer,
    prompt: fromPrompt.promptsReducer
};