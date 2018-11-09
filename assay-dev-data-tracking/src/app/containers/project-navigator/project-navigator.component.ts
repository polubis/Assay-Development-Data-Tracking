import { Component, OnInit } from '@angular/core';
import * as fromApp from '../../store/app.reducers';
import { Store } from "@ngrx/store";
import { Project } from "src/app/models/project.model";
import * as ProjectActions from '../../store/actions/project.actions';
import { Observable } from "rxjs";
@Component({
  selector: "app-project-navigator",
  templateUrl: "./project-navigator.component.html",
  styleUrls: ["./project-navigator.component.scss"]
})
export class ProjectNavigatorComponent implements OnInit {
  constructor(private store: Store<fromApp.AppState>) {}
  projects: Project[] = [];
  isLoadingProjects: boolean = false;

  ngOnInit() {
    this.store.select("project").subscribe(projects => {
      this.isLoadingProjects = projects.loading;
      this.projects = projects.projects;
    });
    this.store.dispatch(new ProjectActions.FetchProjects());
  }
}
