import { Injectable } from '@angular/core';
import { Toast } from '@capacitor/toast';
@Injectable({ providedIn:'root' })
export class ToastService { show(text:string){ return Toast.show({ text }); } }
