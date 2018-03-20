import * as firebase from 'firebase';

//firebase connection
const config = {
  apiKey: "AIzaSyDfCTB_s6a5NfMm8rHaS2s-7MTdbRuqwkc",
  authDomain: "goals-18309.firebaseapp.com",
  databaseURL: "https://goals-18309.firebaseio.com",
  projectId: "goals-18309",
  storageBucket: "",
  messagingSenderId: "883971600815"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');

