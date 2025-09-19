import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-fab',
  template: `
  <ion-fab vertical="bottom" horizontal="end" slot="fixed">
    <ion-fab-button><ion-icon name="add"></ion-icon></ion-fab-button>
    <ion-fab-list side="top">
      <ion-fab-button (click)="pick?.()"><ion-icon name="images"></ion-icon></ion-fab-button>
      <ion-fab-button (click)="setHome?.()"><ion-icon name="home"></ion-icon></ion-fab-button>
      <ion-fab-button (click)="setLock?.()"><ion-icon name="lock-closed"></ion-icon></ion-fab-button>
    </ion-fab-list>
  </ion-fab>`,
  standalone: false,
})
export class FabComponent { @Input() pick?:()=>void; @Input() setHome?:()=>void; @Input() setLock?:()=>void; }
