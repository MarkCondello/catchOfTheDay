import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAa3DOZpiXbQHRtPooml0N5fFL0L7-F52k",
    authDomain: "catch-of-the-day-markcondello.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-markcondello.firebaseio.com",
  });
const base = Rebase.createClass(firebaseApp.database());
//This is a named export
export {firebaseApp}
//This is a default export
export default base;