import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AngularFireAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AngularFireAppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://glorious-expense.firebaseio.com/')
]);

