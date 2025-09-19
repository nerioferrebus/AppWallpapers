import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-link',
  template: `<ion-text color="primary" style="cursor:pointer" (click)="onClick?.()">{{text}}</ion-text>`,
  standalone: false,
})
export class LinkComponent { @Input() text=''; @Input() onClick?:()=>void; }
