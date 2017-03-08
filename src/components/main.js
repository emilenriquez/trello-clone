import React from 'react';
import {Router, Route} from 'react-router';
/**
*a sample counter button
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
              <img src="https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
              &nbsp; ReactBoil
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