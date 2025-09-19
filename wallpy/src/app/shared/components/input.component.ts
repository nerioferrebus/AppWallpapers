import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-input',
  template: `
  <ion-item>
    <ion-label position="stacked">{{label}}</ion-label>
    <ion-input [type]="type" [(ngModel)]="model"></ion-input>
  </ion-item>`,
  standalone: false,
})
export class InputComponent { @Input() label=''; @Input() type='text'; @Input() model:any; }
