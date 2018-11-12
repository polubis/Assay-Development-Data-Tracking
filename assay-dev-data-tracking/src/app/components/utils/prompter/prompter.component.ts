import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from "@ngrx/store";
import * as fromApp from '../../../store/app.reducers';
import { Prompt } from "src/app/models/prompt.model";
import { Subscription } from "rxjs";
import * as fromPrompt from '../../../store/actions/prompts.actions';
@Component({
  selector: "app-prompter",
  template: `
    <div class="prompter">
      <div *ngFor="let prompt of prompts" [ngClass]="'prompt ' + prompt.type">
        <i class="material-icons">{{iconsTypes[prompt.type]}}</i>
        <span>{{prompt.code}} {{prompt.content}}</span>
        <div class="icons-content">
          <i class="material-icons refresh" (click)="refreshEffect(prompt)">
            refresh
          </i>
          <i class="material-icons" (click)="closePrompt(prompt)">
            close
          </i>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./prompter.component.scss"]
})

export class PrompterComponent implements OnInit, OnDestroy {
  prompts: Prompt[] = [];
  subscription: Subscription;

  iconsTypes = { 
    error: "error_outline",
    warning: "warning",
    succ: "done",
  };
  
  constructor(private store: Store<fromApp.AppState>) {}
  ngOnInit() {
    this.subscription = this.store.select("prompt").subscribe(data => {
      this.prompts = data.prompts;
    });
  }

  closePrompt(prompt: Prompt){
    this.store.dispatch(new fromPrompt.RemovePrompt(prompt));
  }

  refreshEffect(prompt: Prompt){
    if(prompt.effect){
      const isPromptAlreadyInPrompts = this.prompts.findIndex(x => x.domain === prompt.domain);
      if(isPromptAlreadyInPrompts !== -1)
        this.closePrompt(prompt);

      if(prompt.requestParams){
        this.store.dispatch(new prompt.effect(prompt.requestParams));
      }
      else
        this.store.dispatch(new prompt.effect());
    }
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
