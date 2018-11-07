import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <div class="loader" [style.width]="width" [style.height]="height"></div>
    <div *ngIf="backdropClass" class="'backdrop backdropClass"></div>
  `,
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  @Input() width: string = "20px";
  @Input() height: string = "20px";
  @Input() backdropClass: string;
}
