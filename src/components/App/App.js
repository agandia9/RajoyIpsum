import React, { Component } from 'react';
import './App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import IpsumForm from '../IpsumForm/IpsumForm'
import OptionsForm from '../OptionsForm/OptionsForm'
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
        <OptionsForm/>
      </div>
    );
  }
}

export default App;
