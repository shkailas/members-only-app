
import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebaseConfig = {
  apiKey: "AIzaSyBzPxqdoKXhf0zW_uRO_d63YSKIsxS9Mpc",
  authDomain: "membersonly-a4c69.firebaseapp.com",
  databaseURL: "https://members-only-app.firebaseio.com",
  projectId: "membersonly-a4c69",
  storageBucket: "membersonly-a4c69.appspot.com",
  messagingSenderId: "718160577654",
  appId: "1:718160577654:web:cac3fc98e1365078c50b57",
  measurementId: "G-E4P3GZN91J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
