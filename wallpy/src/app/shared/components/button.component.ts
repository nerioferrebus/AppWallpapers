import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-button',
  template: `<ion-button expand="block" [color]="color" (click)="onClick?.()">{{text}}</ion-button>`,
  standalone: false,
})
export class ButtonComponent { @Input() text='OK'; @Input() color='primary'; @Input() onClick?:()=>void; }
