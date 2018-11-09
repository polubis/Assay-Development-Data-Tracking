import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  isSideBarExpanded: boolean = false;
  constructor() { }
  togleSide(){
    this.isSideBarExpanded = !this.isSideBarExpanded;
  }
  ngOnInit() {
  }

}
