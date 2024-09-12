import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {environment} from '../environments/environment';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), provideAnimationsAsync(), 
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"crud-contact-b082f","appId":"1:106134067093:web:40b66a352b71591791c89c","storageBucket":"crud-contact-b082f.appspot.com","apiKey":"AIzaSyAEwHiEtTTcLg6bG_7CO1GMX-phl2GWlZg","authDomain":"crud-contact-b082f.firebaseapp.com","messagingSenderId":"106134067093","measurementId":"G-XVY8QSJKYP"})), provideFirestore(() => getFirestore())]
};