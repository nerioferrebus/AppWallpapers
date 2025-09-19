import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, query, orderBy, collectionData, doc, getDoc } from '@angular/fire/firestore';
import { AuthService } from './auth';
import { Observable } from 'rxjs';

@Injectable({ providedIn:'root' })
export class QueryService {
  constructor(private db:Firestore, private auth:AuthService){}
  wallpapers$(): Observable<any[]> {
    const uid = this.auth.uid!;
    const ref = collection(this.db, `users/${uid}/wallpapers`);
    return collectionData(query(ref, orderBy('createdAt','desc')), { idField:'id' }) as Observable<any[]>;
  }
  addWallpaper(meta:any){
    const uid = this.auth.uid!;
    const ref = collection(this.db, `users/${uid}/wallpapers`);
    return addDoc(ref, meta);
  }
  async getUserProfile(){
    const uid = this.auth.uid!;
    const snap = await getDoc(doc(this.db, `users/${uid}`));
    return snap.data();
  }
}
