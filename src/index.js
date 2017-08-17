import React from 'react';
import ReactDOM from 'react-dom';
import Column from './components/Column';
import Main from './components/Main';
import Home from './components/Home';
import {hashHistory,Router, Route} from 'react-router';
import * as firebase from 'firebase';




document.addEventListener('DOMContentLoaded', () => {
  const app = firebase.initializeApp({
    apiKey: "AIzaSyAju91yGJNLfhr2n_8KvG4nwpepi1WiosA",
    databaseURL: "https://trello-clone-3b034.firebaseio.com/",
  });

  ReactDOM.render(
    <Router history={hashHistory}>
        <Route component={Main}>
       		<Route path="/" component={Home}/>
          <Route path="/column" component={Column} />
        </Route>
    </Router>,
    document.getElementById('container')
  );
});