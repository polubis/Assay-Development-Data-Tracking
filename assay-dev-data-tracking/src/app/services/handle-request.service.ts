


import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of, throwError, Observable } from "rxjs";
import { catchError } from "rxjs/internal/operators/catchError";
import { Store } from "@ngrx/store";
import * as fromApp from '../store/app.reducers';
import * as PromptActions from '../store/actions/prompts.actions';
import { Prompt } from '../models/prompt.model';
import { tap } from "rxjs/internal/operators/tap";

export interface RequestSetting {
    [requestName: string] : {
        type: string, url: string, needsAuth?: boolean, domain: string, enableRefresh?: boolean
    }
};

@Injectable()
export class HandleRequestService {
    constructor(private http: HttpClient, private store: Store<fromApp.AppState>){}

    serverPath: string = "https://jsonplaceholder.typicode.com/";   
    requestsSettings: RequestSetting = {
        fetchProjects: {
            type: "get", 
            url: "poss",
            needsAuth: true,
            domain: "Projects",
            enableRefresh: true
        },
        fetchStudies: {
            type: "get", 
            url: "Dsadsd",
            needsAuth: true,
            domain: "Studies",
            enableRefresh: true
        },
        fetchExperiments: {
            type: "get", 
            url: "Dsadsd",
            needsAuth: true,
            domain: "Experiments",
            enableRefresh: true
        }
    };
    
    handleRequest(settingName: string, functionToDispatch: any, effect?: any, effectParams?: any): Observable<HttpClient>{
        const setting = this.requestsSettings[settingName];
        return this.http[setting.type](this.serverPath + setting.url)
            .pipe(
                tap(data => {
                    console.log(data);
                    return data;
                }),
                catchError(error => {
                    this.store.dispatch(new functionToDispatch());
                    this.handleError(setting.domain, error, effect, effectParams);
                    return of();
                })
            );
    }

    handleError(domain: string, errorResponse: any, effect: any, effectParams: any){
        let content: string = "";

        if(errorResponse.status === 0){
            content = "Ups, you don't have probably internet connection";
        }

        if(errorResponse.status === 401){
            content = "Your acces here is not allowed";
        }

        if(errorResponse.status === 404){
            content = "Request parameters not found";
        }

        const prompt = new Prompt(domain, content, "error", errorResponse.status, effect, effectParams);
        this.store.dispatch(new PromptActions.SetPrompts([prompt]));
    }
}