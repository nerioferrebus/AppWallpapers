import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class AppTranslateService {
  constructor(private t: TranslateService) {}
  init() {
    const lang = navigator.language?.split('-')[0]?.toLowerCase() || 'en';
    const allowed = ['es','en'];
    const use = allowed.includes(lang) ? lang : 'en';
    this.t.addLangs(['es','en']);
    this.t.setDefaultLang('en');
    this.t.use(use);
  }
  use(lang:'es'|'en'){ this.t.use(lang); }
  instant(key:string, params?:any){ return this.t.instant(key, params); }
  get currentLang(){ return this.t.currentLang; }
}
