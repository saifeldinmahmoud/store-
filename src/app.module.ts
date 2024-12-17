import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

// Firebase Imports
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { provideFirebaseApp, initializeApp as initializeFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from './environments/environment';

// Initialize Firebase using the firebase object from environment
const firebaseConfig = environment.firebase;
const app = initializeApp(firebaseConfig);

// Directly use getAnalytics without specifying type
const analytics = getAnalytics(app);  // The type is inferred automatically by TypeScript

// Start the app with Firebase and other providers
bootstrapApplication(AppComponent, {
  providers: [
    provideFirebaseApp(() => initializeFirebaseApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
}).catch((err) => console.error(err));
