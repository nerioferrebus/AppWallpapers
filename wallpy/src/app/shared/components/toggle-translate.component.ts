import { Component } from '@angular/core';
import { AppTranslateService } from '../../core/services/translate';
@Component({
  selector: 'app-toggle-translate',
  template: `
  <ion-segment [value]="lang" (ionChange)="switch($event.detail.value)">
    <ion-segment-button value="es">ES 🇪🇸</ion-segment-button>
    <ion-segment-button value="en">EN 🇺🇸</ion-segment-button>
  </ion-segment>`,
  standalone: false,
})
export class ToggleTranslateComponent {
  lang:'es'|'en'='en';
  constructor(private t:AppTranslateService){ this.lang = (this.t.currentLang as any) || 'en'; }
  switch(v: any) {
    if (v === 'es' || v === 'en') {
      this.lang = v;
      this.t.use(v);
    }
  }
}
