import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from '@angular/fire/auth';
import { Firestore, doc, setDoc, serverTimestamp } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user: User|null = null;
  constructor(private auth:Auth, private db:Firestore){
    onAuthStateChanged(this.auth, u => this.user = u);
  }
  async register(email:string, password:string, profile:{name:string;lastName:string;lang:'es'|'en'}) {
    const cred = await createUserWithEmailAndPassword(this.auth, email, password);
    await setDoc(doc(this.db, `users/${cred.user.uid}`), { uid: cred.user.uid, email, ...profile, createdAt: serverTimestamp() });
    return cred.user;
  }
  login(email:string, password:string){ return signInWithEmailAndPassword(this.auth, email, password); }
  logout(){ return signOut(this.auth); }
  get uid(){ return this.user?.uid || null; }
  get isLogged(){ return !!this.user; }
}
