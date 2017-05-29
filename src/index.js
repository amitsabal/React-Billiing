import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ItemListDisp from './components/item_list_display';

class App extends Component {
  constructor(props) {
    super(props);
  }     
  render() {
	return (
      <div>   
		<ItemListDisp />

	  </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
