import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"store-5dd06","appId":"1:541264326332:web:6d4ea381206cc3b19eeab9","databaseURL":"https://store-5dd06-default-rtdb.firebaseio.com","storageBucket":"store-5dd06.firebasestorage.app","apiKey":"AIzaSyA2VUMeyJDEQgtzQ2W7s2eaoJ_rKJeIDYQ","authDomain":"store-5dd06.firebaseapp.com","messagingSenderId":"541264326332","measurementId":"G-K9FXNKNCHP"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
