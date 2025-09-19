import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
@Injectable({ providedIn:'root' })
export class PrefsService {
  set(key:string, value:string){ return Preferences.set({key, value}); }
  async get(key:string){ return (await Preferences.get({key})).value; }
}
