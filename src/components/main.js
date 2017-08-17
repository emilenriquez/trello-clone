import React from 'react';
import {Router, Route} from 'react-router';
/**
* Main  App template file
*/

class Main extends React.Component {
  constructor() {
    super();
  }

  render (){
    return (
      <div>
        <nav className="navbar navbar-light bg-faded">
            <a className="navbar-brand" href="#">
              <h5 className="m-0">  TRELLO CLONE </h5>
            </a>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default Main;