import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import Main from './components/Main';
import Home from './components/Home';
import {hashHistory,Router, Route} from 'react-router';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Router history={hashHistory}>
        <Route component={Main}>
       		<Route path="/" component={Home}/>
        	<Route path="/counter" component={Counter}/>
        </Route>
    </Router>,
    document.getElementById('container')
  );
});