import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import Hello from './hello.js';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Hello),
    document.getElementById('mount')
  );
});