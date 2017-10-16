import React, { Component } from 'react';
import './App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import IpsumForm from '../IpsumForm/IpsumForm'

class App extends Component {
	constructor() {
		super()
		this.state = {
		text:''
		}
	}

  render() {
    return (
      <div className="App">
        <h1>RajoyIpsum</h1>
        <IpsumForm/>
      </div>
    );
  }
}

export default App;
