import { Action } from "@ngrx/store";
import { Prompt } from "src/app/models/prompt.model";

export const SET_PROMPTS = "[Prompt] SET_PROMPTS";
export const REMOVE_PROMPT = "[Prompt] REMOVE_PROMPT";

export class SetPrompts implements Action{
    readonly type = SET_PROMPTS;
    constructor(public payload: Prompt[]){}
}

export class RemovePrompt implements Action{
    readonly type = REMOVE_PROMPT;
    constructor(public payload: Prompt){}
}


export type PromptActions = SetPrompts | RemovePrompt;