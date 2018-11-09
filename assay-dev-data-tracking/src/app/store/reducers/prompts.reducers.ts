



import * as PromptActions from '../actions/prompts.actions';
import { Prompt } from '../../models/prompt.model';


export interface State {
  prompts: Prompt[];
};

const initialState: State = {
    prompts: []
};

export function promptsReducer(state = initialState, action: PromptActions.PromptActions){
    switch(action.type){
        case PromptActions.SET_PROMPTS:
            return { 
                ...state,
                prompts: [...state.prompts, ...action.payload]
            }
        case PromptActions.REMOVE_PROMPT:
            const currentPrompts = [...state.prompts];
            const indexOfPromptToDelete = currentPrompts.findIndex(prompt => prompt.domain === action.payload.domain);
            currentPrompts.splice(indexOfPromptToDelete, 1);
            return {
                ...state, 
                prompts: currentPrompts
            }
        default:
            return state;
    }
}