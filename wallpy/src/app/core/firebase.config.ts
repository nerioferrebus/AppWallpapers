import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
// Si usas Storage, agrega:
// import { provideStorage, getStorage } from '@angular/fire/storage';

export const firebaseProviders = [
  provideFirebaseApp(() => initializeApp({
     apiKey: 'AIzaSyAmLKlAAA1mdU4atezpNepAzxFtcuO0qC4',
    authDomain: 'wallpapersnerio.firebaseapp.com',
    projectId: 'wallpapersnerio',
    appId: '1:894753536469:web:3787a6861ab51bee43255c"',
  })),
  provideAuth(() => getAuth()),
  provideFirestore(() => getFirestore()),
  // provideStorage(() => getStorage()),
];
