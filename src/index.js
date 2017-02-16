import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import firebase from 'firebase';
import firebaseConfig from '../firebaseConfig.js';

firebase.initializeApp(firebaseConfig);


ReactDOM.render(

  <App />,
  document.getElementById('root')
);
