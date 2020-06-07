// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: 'https://bike-market-7b14d.firebaseio.com',
  loginRedirectUrl: '/',
  logoutRedirectUrl: '/login',
  firebase: {
    apiKey: 'AIzaSyD2Db5cDW-X5P1gLaLqbotib0PGQEqZKKk',
    signUpUrl: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=',
    signInUrl: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=',
    authDomain: 'bike-market-7b14d.firebaseapp.com',
    databaseURL: 'https://bike-market-7b14d.firebaseio.com',
    projectId: 'bike-market-7b14d',
    storageBucket: 'bike-market-7b14d.appspot.com',
    messagingSenderId: '1070613226493',
    appId: '1:1070613226493:web:8a7c093a766d14c85aef94',
    measurementId: 'G-9EW9B9GQXH'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
