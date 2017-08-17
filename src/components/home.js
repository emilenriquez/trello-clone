import React from 'react';
import Board from './Board';
/**
* the root contents
*/

class Home extends React.Component {
	constructor() {
		super();
	}

	render (){
		return (
      <Board/>
		)
	}
}
export default Home;