import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-card',
  template: `
  <ion-card>
    <img [src]="src" *ngIf="src"/>
    <ion-card-content><ng-content></ng-content></ion-card-content>
  </ion-card>`,
  standalone: false,
})
export class CardComponent { @Input() src?:string; }
